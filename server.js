var express = require('express');
var mysql = require('mysql');
var expressHandlebars = require('express-handlebars');
var app = express();
var PORT = process.env.NODE_ENV || 8080;

app.engine('handlebars', expressHandlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
