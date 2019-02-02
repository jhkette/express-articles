const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/nodekb');
let db = mongoose.connection;


//check connection
db.once('open', function(){
    console.log('Connected to MongoDb');
})


//check for db errors

db.on('error', function(err){
    console.log(err)
});

//init app
const app = express();

let Article = require('./models/article');


// load view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');




// home route
app.get('/', function(req, res){
    Article.find({}, function(err, articles){
        if(err){
            console.log(err);
        }
        else{
        res.render('index',{
            title: 'Articles',
            articles: articles

        });
       }
    });

});

app.listen(5000, function(){
    console.log('server started on port 5000');
});

app.get('/articles/add', function(req, res){
    res.render('add_article', {
        title: 'Add article'
    });
});
