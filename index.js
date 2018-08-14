// Library
var express = require('express');

const app = express();

app.use(express.static(__dirname + '/docs/'));

var port = process.env.PORT || 8081

app.listen(port, function() {
    console.log('Server listens on port ' + port + '.');
})