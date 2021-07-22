export default function (srcPath: string, width: unknown, height: unknown):string  {

const imgWidth = width as number
const imgHeight = height as number

  return `<img 
  src="${srcPath}" 
  width=${Number(imgWidth)}
  height=${Number(imgHeight)}
  >`
}
