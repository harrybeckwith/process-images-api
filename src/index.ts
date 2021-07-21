import express from 'express'

const app = express()
const port = 3000
console.log(__dirname)
app.use(express.static(__dirname));

app.get('/api', function (req, res) {
    res.send(`<img 
    src="/assets/full/${req.query.filename}.jpg" 
    width=${req.query.width}
    height=${req.query.height}
    >`)
  })

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
