const mongoose = require('mongoose');

// Schema
const Schema = mongoose.Schema;
const ArticleSchema = new Schema({
    author: String,
    title: String,
    journal: String,
    year: String,
    month: String,
    volume: String,
    number: String,
    pages: String,
    eprint: String,
    eprinttype: String,
    eprintclass: String,
    annote: String
});

// Model
const Article = mongoose.model('Article', ArticleSchema);

module.exports = Article;