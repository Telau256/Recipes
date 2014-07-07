/**
 * Created by Gebruiker on 26-6-14.
 */

var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('hello world');
});

app.listen(3000);