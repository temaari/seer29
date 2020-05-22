const express = require('express');

const router = express.Router();

const Article = require('../models/articleInfo')

// routes
router.get('/', (req, res) => {
    Article.find({ })
        .then((data) => {
            console.log('Data: ', data)
            res.json(data);
        })
        .catch((error) => {
            console.log('Error: ', error)
        }
    );
});

router.post('/save', (req, res) => {
    const data = req.body;

    const newArticle = new Article(data);
    newArticle.save((error) => {
        if (error) {
            res.status(500).json({ msg: 'Sorry, internal server errors' });
            return;
        } 
        return res.json({
            msg: 'Your Data has been saved!!!'
        });
    })

});

module.exports = router