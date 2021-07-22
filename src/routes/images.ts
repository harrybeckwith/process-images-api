import {Router} from "express";
import createImage from '../helpers/createImage'
import createPath from '../helpers/createPath'
import createJPG from '../helpers/createJPG'
import appRoot from 'app-root-path'

const router = Router()

router.get('/', function (req, res) {
// example url for image http://localhost:3000/api/images?filename=encenadaport&width=200&height=200
// create img from url params
  const img = createImage(
      `/assets/full/${req.query.filename}.jpg`,
      req.query.width,
      req.query.height
  )
  res.send(img)
  const imgName = String(req.query.filename)
  const imgWidth: unknown = Number(req.query.width)
  const imgHeight: unknown = Number(req.query.height)
 // paths input and output for img
  const srcPath: string = createPath(appRoot, `/src/assets/full/${imgName}.jpg`)
  const dstPath: string = createPath(appRoot, `/src/assets/thumb/${imgName}.jpg`)
  // send img resized img to folder
  const resize = async () => {
      try {
          await createJPG(
              srcPath,
              imgWidth as number,
              imgHeight as number,
              dstPath
          )
      } catch (err) {
          console.log(err)
          res.send(img)
      }
  }
  resize()
})

export default router