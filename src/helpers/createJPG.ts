import sharp, { FitEnum } from 'sharp'

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