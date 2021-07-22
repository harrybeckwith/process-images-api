import sharp, { FitEnum } from 'sharp'
/**
  * @param srcPath string - path to image file
  * @param width number - width attribute on image
  * @param height number - height attribute on image
  * @param dstPath string - path for resized image to go to
  * @returns resized image into folder
*/
const createJPG = async (
  srcPath: string,
  width: number,
  height: number,
  dstPath: string
) => {
  await sharp(srcPath)
      .resize(width, height)
      .toFormat('jpg')
      .toFile(dstPath);
};

export default createJPG