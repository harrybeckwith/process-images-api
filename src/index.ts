import express from 'express'
import fs from 'fs'
import path from 'path'

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

      fs.writeFileSync(path.join(__dirname,"assets/thumb",`${req.query.filename}.jpg`), "This is an example text","UTF8")


  })

  

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
