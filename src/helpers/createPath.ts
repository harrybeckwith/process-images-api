import path from 'path'
/**
  * @param dirName string - begining part of directory
  * @param pathString string - end part of path
  * @returns string of combined dirName and pathString 
*/
const createPath = (dirName: unknown, pathString: string):string => {
  const newPath = path.join(dirName + pathString)
  return newPath
}

export default createPath