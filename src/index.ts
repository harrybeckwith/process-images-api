import express from 'express'
import sharp from 'sharp'
import path from 'path'
import createImage from './helpers/createImage'
import createPath from './helpers/createPath'

const app = express()
const port = 3000
app.use(express.static(__dirname));

app.get('/api', function (req, res) {
    const img  = createImage(`/assets/full/${req.query.filename}.jpg`, req.query.width, req.query.height)
    res.send(img)
    
    const srcPath: string = createPath(__dirname, '/assets/full/encenadaport.jpg')
    const dstPath: string = createPath(__dirname, '/assets/thumb/encenadaport.jpg')
    
    const resizeJPEG = async (
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


    const resize = async () => {
        try {
            await resizeJPEG(srcPath, 200, 300, dstPath);
        } catch (err) {
            console.log(err)
        }

    }

    resize()
    
  })



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
