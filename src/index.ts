import express from 'express'
import sharp from 'sharp'
import path from 'path'
import createImage from './helpers/createImage'

const app = express()
const port = 3000
app.use(express.static(__dirname));

app.get('/api', function (req, res) {
    const img  = createImage(`/assets/full/${req.query.filename}.jpg`, req.query.width, req.query.height)
    res.send(img)

    const srcFilePath: string = path.join(
        __dirname + '/assets/full/encenadaport.jpg'
    );

    const dstFilePath: string = path.join(
        __dirname + '/assets/thumb/encenadaport.jpg'
    );

    console.log(srcFilePath)

    const resizeJPEG = async (
        srcPath: string,
        width: number,
        height: number,
        dstFilePath: string
    ) => {
        await sharp(srcPath)
            .resize(width, height)
            .toFormat('jpg')
            .toFile(dstFilePath);
    };


    const resize = async () => {
        try {
            await resizeJPEG(srcFilePath, 200, 300, dstFilePath);
        } catch (err) {
            console.log(err)
        }

    }

    resize()
    
  })



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
