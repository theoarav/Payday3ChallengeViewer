import { app, shell, BrowserWindow, autoUpdater, dialog } from 'electron'
import { join } from 'path'
import { electronApp, optimizer, is } from '@electron-toolkit/utils'
import icon from '../../build/icon.png?asset'

let mainWindow

//@InsulatorGMan

// Commented for now see: https://github.com/theoarav/Payday3ChallengeViewer/pull/7#issuecomment-1761252564

// const server = 'https://pd3-challenge-viewer-vercel-update-server-a18tj6086.vercel.app' // Vercel Deployment
// const url = `${server}/update/${process.platform}/${app.getVersion()}`

// // Do not run in development
// if (app.isPackaged) {
//   autoUpdater.setFeedURL({ url })

//   // Check for updates every 5 minutes
//   setInterval(() => {
//     autoUpdater.checkForUpdates()
//   }, 300000)

//   // Prompt user to install update, if found.
//   autoUpdater.on('update-downloaded', (_event, releaseNotes, releaseName) => {
//     const dialogOpts = {
//       buttons: ['Restart', 'Later'],
//       title: 'Application Update',
//       message: process.platform === 'win32' ? releaseNotes : releaseName,
//       detail: 'A new version has been downloaded. Restart the application to apply the updates.'
//     }

//     dialog.showMessageBox(dialogOpts).then((returnValue) => {
//       if (returnValue.response === 0) autoUpdater.quitAndInstall()
//     })
//   })

//   autoUpdater.on('error', (message) => {
//     console.error('There was a problem updating the application')
//     console.error(message)
//   })
// }

//!@InsulatorGMan

function createWindow(): void {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 900,
    height: 670,
    minWidth: 450,
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
