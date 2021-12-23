const express = require("express");
const app = express();

const server = app.listen(8080, function(){
    console.log("Node.js is listening to PORT:" + server.address().port);
});

app.set('view engine', 'ejs');
app.set('views', './src/views');
app.get("/", (req, res) => {
    res.render("index")
});