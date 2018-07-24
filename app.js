const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

Genres = require('./models/genres');
Books = require('./models/books');
const app = express();
app.use(bodyParser.json());

//connect to mongoose
mongoose.connect('mongodb://localhost/bookstore');
const db = mongoose.connection;

app.get('/',function(req,res){
    res.send('Pls use apis at /api/books or /api/genres');
});
app.get('/api/genres', function(req,res){
    Genres.getGenres(function(err, genres){
        if(err) throw err;
        res.json(genres);
    })

});
/* app.get('/api/genres/add/:genre', function(req,res){
    Genres.addGenre(req.params.genre,function(err,genres){
        if(err) throw err;
        res.send('Item added!');
    })
}) */

app.post('/api/genres', function(req,res){
    let genre = req.body;
    Genres.addGenre(genre, function(err, genre){
        if(err) throw err;
        res.json(genre);
    })
})

app.put('/api/genres/:_id', function(req,res){
    const id = req.params._id;
    const genre = req.body;
    Genres.updateGenre(id, genre, {}, function(err, genre){
        if(err) throw err;
        res.json(genre);
    });
});
app.get('/api/books', function(req,res){
    Books.getBooks(function(err, books){
        if(err) throw err;
        res.json(books);
    })
    
});
app.get('/api/books/:_id', function(req,res){
    console.log(req);
    Books.getBookById(req.params._id,function(err,book){
        if (err) throw err;
        res.json(book);
    })
});

app.post('/api/books', function(req,res){
    let book = req.body;
    Books.addBook(book, function(err, genre){
        if(err) throw err;
        res.json(book);
    })
});

app.put('/api/books/:_id', function(req,res){
    const id = req.params._id;
    const book = req.body;
    Books.updateBook(id, book, {}, function(err, book){
        if(err) throw err;
        res.json(book);
    });
});


app.delete('/api/books/:_id', function(req,res){
    const id = req.params._id;
    const book = req.body;
    Books.deleteBook(id, function(err, book){
        if(err) throw err;
        res.json(book);
    });
});

app.delete('/api/genres/:_id', function(req,res){
    const id = req.params._id;
    const genre = req.body;
    Books.deleteBook(id, function(err, genre){
        if(err) throw err;
        res.json(genre);
    });
});




app.listen(3000);
console.log('connnected');