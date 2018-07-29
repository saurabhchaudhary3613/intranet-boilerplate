var React = require ('react');
var ReactDom = require ('react-dom');
var ReactDomServer = require('react-dom/server');

var express = require ('express');
var path = require('path');
var ejs = require('ejs');


var app = express();
app.set('views', __dirname + '/src/views');
app.set('view engine', 'html');
app.engine('html', ejs.renderFile);

app.use(express.static(path.join(__dirname, 'dist')));


app.get('/', function (req, res){
    res.render('index');
});


app.get('/products', function (req, res){
    res.render('products');
});

app.get('/teams', function (req, res){
    res.render('teams');
});

app.get('/themes', function (req, res){
    res.render('themes');
});
app.get('/quick-links', function (req, res){
    res.render('quick-links');
});
app.get('/my-favorites', function (req, res){
    res.render('my-favorites');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
   