const mongoose = require('mongoose');

//books schema
const booksSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    genre:{
        type: String,
        required: true
    },
    description:{
        type: String
    },
    author:{
        type: String,
        required: true
    },
    publisher:{
        type: String
    },
    pages:{
        type: String
    },
    image_url:{
        type: String
    }, 
    but_url:{
        type: String
    },
    create_date:{
        type: Date,
        default: Date.now
    }
})

let Book = module.exports = mongoose.model('Book', booksSchema);

// get books
module.exports.getBooks = function(callback, limit){
    Books.find(callback).limit(limit);
};

// get book by id
module.exports.getBookById = function(id,callback){
    Books.findById(id, callback);
}

// add book
module.exports.addBook = function(book, callback){
    Books.create(book,callback);
}

// update book
module.exports.updateBook = function(id, book, options, callback){
    const query = {_id:id};
    const update=  {
        title: book.title,
        genre: book.genre,
        description: book.description,
        author: book.author,
        buy_url: book.buy_url,
        image_url: book.image_url,
        publisher: book.publisher,
        pages: book.pages
    }
    Books.findOneAndUpdate(query,update,{},callback);
}

//delete book
module.exports.deleteBook = function(id, callback){
    const query = {_id: id};
    Books.remove(query,callback);
}