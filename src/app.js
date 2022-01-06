const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

const server = app.listen(port, function(){
    console.log("Node.js is listening to PORT:" + server.address().port);
});

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use('test', express.static(__dirname + '/test'));
app.get('/', (req, res) => {
    res.render('index')
});