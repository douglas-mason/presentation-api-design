var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/apiDesignPresi/index.html");
});
app.use("/", express.static(__dirname + "/apiDesignPresi/"));

app.listen(port);