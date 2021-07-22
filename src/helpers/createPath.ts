import path from 'path'

const createPath = (dirName: string, pathString: string):string => {
  const newPath = path.join(dirName + pathString)
  return newPath
}

export default createPath