import { getStatItems } from '../Stats/Stats'

export const exportPayCheck3Data = async () => {
  const statItems = await getStatItems()
  if (!statItems) return false

  // const anonimisedData: any = []
  // for (const stat of statItems.data) {
  //   anonimisedData.push({
  //     ...stat,
  //     updatedAt: '2023-09-20T10:00:00.000Z',
  //     createdAt: '2023-09-20T10:00:00.000Z',
  //     userId: 'USERID',
  //     value: 0.0
  //   })
  // }
  const downloadFile = (content, fileName, contentType): void => {
    const a = document.createElement('a')
    const file = new Blob([content], { type: contentType })
    a.href = URL.createObjectURL(file)
    a.download = fileName
    a.click()
  }
  downloadFile(JSON.stringify(statItems.data), 'statItems.json', 'text/plain')
  return true
}
