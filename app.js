const express = require('express');
const path = require('path');


//init app
const app = express();


// load view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');




// home route
app.get('/', function(req, res){
    res.render('index',{
        title: 'Articles'
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
