"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
// import createImage from './helpers/createImage'
// import createPath from './helpers/createPath'
// import createJPG from './helpers/createJPG'
var index_1 = __importDefault(require("./routes/index"));
var app = express_1.default();
var port = 3000;
app.use(express_1.default.static(__dirname));
index_1.default(app);
// app.get('/api/images/', function (req, res) {
//     const img = createImage(
//         `/assets/full/${req.query.filename}.jpg`,
//         req.query.width,
//         req.query.height
//     )
//     res.send(img)
//     //http://localhost:3000/api/images?filename=encenadaport&width=200&height=200
//     const imgName = String(req.query.filename)
//     const imgWidth: unknown = Number(req.query.width)
//     const imgHeight: unknown = Number(req.query.height)
//     const srcPath: string = createPath(__dirname, `/assets/full/${imgName}.jpg`)
//     const dstPath: string = createPath(
//         __dirname,
//         `/assets/thumb/${imgName}.jpg`
//     )
//     const resize = async () => {
//         try {
//             await createJPG(
//                 srcPath,
//                 imgWidth as number,
//                 imgHeight as number,
//                 dstPath
//             )
//         } catch (err) {
//             console.log(err)
//         }
//     }
//     resize()
// })
app.listen(port, function () {
    console.log("Example app listening at http://localhost:" + port);
});
exports.default = app;
