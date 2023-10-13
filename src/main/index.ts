import { app, shell, BrowserWindow, dialog } from 'electron'
import { join } from 'path'
import { electronApp, optimizer, is } from '@electron-toolkit/utils'
import icon from '../../build/icon.png?asset'
import { autoUpdater } from 'electron-updater'

const appPath = app.getAppPath()
const isInsideTemp = appPath.toLowerCase().includes('appdata\\local\\temp')

const IS_PORTABLE_VERSION = isInsideTemp

let mainWindow

function htmlToPlainText(html) {
  const parser = new DOMParser()
  const dom = parser.parseFromString(html, 'text/html')
  return dom.body.textContent || ''
}

// Do not run in development
if (app.isPackaged) {
  setInterval(() => {
    autoUpdater.checkForUpdates()

    if (IS_PORTABLE_VERSION) {
      checkForUpdate()
    }
  }, 300000)

  autoUpdater.on('update-available', (info) => {
    let detailMessage = ''

    // Check if release notes are available. If not, use the release name.
    if (info.releaseNotes) {
      detailMessage = htmlToPlainText(info.releaseNotes)
    } else {
      detailMessage = `Release Name: ${info.releaseName}`
    }

    dialog
      .showMessageBox({
        type: 'info',
        title: 'Update Available',
        message: 'A new update is available. Would you like to download and install it?',
        detail: detailMessage,
        buttons: ['Yes', 'No']
      })
      .then((response) => {
        // If the user clicks the "Yes" button (button index 0), start downloading the update.
        if (response.response === 0) {
          autoUpdater.downloadUpdate()
        }
      })
  })

  autoUpdater.on('update-downloaded', (info) => {
    let detailMessage = ''

    // Check if release notes are available. If not, use the release name.
    if (info.releaseNotes) {
      detailMessage = htmlToPlainText(info.releaseNotes)
    } else {
      detailMessage = `Release Name: ${info.releaseName}`
    }

    const dialogOpts = {
      buttons: ['Restart', 'Later'],
      title: 'Application Update',
      message: 'A new update is available.',
      detail: detailMessage
    }

    dialog.showMessageBox(dialogOpts).then((returnValue) => {
      if (returnValue.response === 0) autoUpdater.quitAndInstall()
    })
  })

  autoUpdater.on('error', (message) => {
    console.error('There was a problem updating the application')
    console.error(message)
  })
}

function checkForUpdate() {
  const GITHUB_API_URL =
    'https://api.github.com/repos/theoarav/Payday3ChallengeViewer/releases/latest'

  fetch(GITHUB_API_URL)
    .then((res) => res.json())
    .then((data) => {
      const latestVersion = data.tag_name
      const currentVersion = app.getVersion() // Assurez-vous d'avoir importé 'app' depuis 'electron'

      if (latestVersion !== currentVersion) {
        const dialogOpts = {
          buttons: ['Open GitHub', 'Later'],
          title: 'New Update Available',
          message: 'A newer version of the application is available.',
          detail: `Version available: ${latestVersion}\nYour version: ${currentVersion}`
        }

        dialog.showMessageBox(dialogOpts).then((returnValue) => {
          if (returnValue.response === 0) {
            shell.openExternal(
              `https://github.com/theoarav/Payday3ChallengeViewer/releases/tag/${latestVersion}`
            )
          }
        })
      }
    })
    .catch((err) => {
      console.error('Error checking for updates:', err)
    })
}

function createWindow(): void {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 900,
    height: 670,
    minWidth: 580,
    show: false,
    autoHideMenuBar: true,
    ...(process.platform === 'linux' ? { icon } : {}),
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false,
      webSecurity: false
    }
  })

  mainWindow.on('ready-to-show', () => {
    mainWindow.show()
  })

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  // HMR for renderer base on electron-vite cli.
  // Load the remote URL for development or the local html file for production.
  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL'])
  } else {
    mainWindow.loadFile(join(__dirname, '../renderer/index.html'))
  }
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  app.commandLine.appendSwitch('disable-features', 'OutOfBlinkCors')
  // Set app user model id for windows
  electronApp.setAppUserModelId('com.electron')

  // Default open or close DevTools by F12 in development
  // and ignore CommandOrControl + R in production.
  // see https://github.com/alex8088/electron-toolkit/tree/master/packages/utils
  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window)
  })

  createWindow()

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('ready', function () {
  autoUpdater.checkForUpdates()

  if (IS_PORTABLE_VERSION) {
    checkForUpdate()
  }
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

// In this file you can include the rest of your app"s specific main process
// code. You can also put them in separate files and require them here.
