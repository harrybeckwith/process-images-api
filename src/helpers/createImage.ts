/**
  * @param srcPath string - path to image file
  * @param width number - width attribute on image
  * @param height number - height attribute on image
  * @returns image html element
*/
const createImage =  (srcPath: string, width: unknown, height: unknown) => {
  const imgWidth = width as number
  const imgHeight = height as number
  return `<img src="${srcPath}" width=${Number(imgWidth)} height=${Number(imgHeight)}>`
}

export default createImage