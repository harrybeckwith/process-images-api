import express from 'express'
import sharp from 'sharp'
import path from 'path'
import fs from 'fs'

const app = express()
const port = 3000
console.log(__dirname)
app.use(express.static(__dirname));

app.get('/api', function (req, res) {
    const img = `<img 
    src="/assets/full/${req.query.filename}.jpg" 
    width=${req.query.width}
    height=${req.query.height}
    >`

    res.send(img)
    //  /images?filename=encenadaport&width=200&height=200
    // fs.writeFile(path.join(__dirname,"assets/thumb",`${req.query.filename}.jpg`), "w+", () => {
    //     console.log('a')
    // })
    const srcFilePath: string = path.join(
        __dirname + '/assets/full/encenadaport.jpg'
    );

    const dstFilePath: string = path.join(
        __dirname + '/assets/thumb/encenadaport.jpg'
    );

    console.log(srcFilePath)

    const resizeJPEG = async (
        srcFilePath: string,
        reqWidth: number,
        reqHeight: number,
        dstFilePath: string
    ) => {
        await sharp(srcFilePath)
            .resize(reqWidth, reqHeight)
            .toFormat('jpeg')
            .toFile(dstFilePath);
    };

    try {
        fs.accessSync(srcFilePath, fs.constants.F_OK);
        console.log(`Requested file presents in full dir`);
    } catch (err) {
        res.send(`Error: Requested file is not present in full dir`);
        return;
    }

       // Check if resized file is present or not
       try {
        fs.accessSync(dstFilePath, fs.constants.F_OK);
        // File exists. Display the resized image
        console.log(`Resized file present in the thumb dir`);

        res.sendFile(dstFilePath);
        return;
    } catch (err) {
        console.log(`No resized file found`);
    }

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
