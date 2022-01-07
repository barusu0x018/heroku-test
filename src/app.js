/* 動的モジュール(このモジュールとか)は修正後に逐一「heroku local web」コマンドを打たないと 
　 確認出来ないので注意
*/

const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const mime = {
  ".html": "text/html",
  ".css": "text/css"
  // 読み取りたいMIMEタイプはここに追記
};

const server = app.listen(port, function () {
  console.log("Node.js is listening to PORT:" + server.address().port);
});

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
/* 下記の指定で静的ファイルのアクセスは "http://localhost:XXXX/statics/hoge.html" という形になる */
// app.use('/statics', express.static(__dirname + '/statics'));
/* 下記の指定で静的ファイルのアクセスは "http://localhost:XXXX/hoge.html"という形になる */
app.use(express.static(__dirname + '/statics'));
app.get("/", (req, res) => {
  res.render("index");
});
