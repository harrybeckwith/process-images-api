import express from 'express'
import createImage from './helpers/createImage'
import createPath from './helpers/createPath'
import createJPG from './helpers/createJPG'

const app = express()
const port = 3000
app.use(express.static(__dirname));

app.get('/api', function (req, res) {
    const img  = createImage(`/assets/full/${req.query.filename}.jpg`, req.query.width, req.query.height)
    res.send(img)

    const imgName: string = String(req.query.filename)
    const imgWidth: unknown = Number(req.query.width)
    const imgHeight: unknown = Number(req.query.height)
    
    const srcPath: string = createPath(__dirname, `/assets/full/${imgName}.jpg`)
    const dstPath: string = createPath(__dirname, `/assets/thumb/${imgName}.jpg`)
    
    const resize = async () => {
        try {
            await createJPG(srcPath, imgWidth as number, imgHeight as number, dstPath);
        } catch (err) {
            console.log(err)
        }

    }

    resize()
    
  })



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
