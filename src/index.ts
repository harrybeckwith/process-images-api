import express from 'express'
import routes from './routes/index'

const app = express()
const port = 3000

app.use(express.static(__dirname))
routes(app)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

export default app
