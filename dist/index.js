"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var app = express_1.default();
var port = 3000;
app.use(express_1.default.static(path_1.default.join(__dirname, "/public")));
app.get('/api', function (req, res) {
    res.send("<img src=\"/assets/images/full/encenadaport.jpg\">");
});
app.listen(port, function () {
    console.log("Example app listening at http://localhost:" + port);
});
