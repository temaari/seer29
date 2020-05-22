const  express = require('express');
const  mongoose = require('mongoose');
const  morgan = require('morgan');
const  path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

// Setting up MongoDB
const MONGODB_URL = 'mongodb+srv://christian:damars0nBars@seer29-tipk9.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(MONGODB_URL , {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected!!!');
});

// Schema
const Schema = mongoose.Schema;
const BlogPostSchema = new Schema({
    title: String,
    body: String,
    date: {
        type: String,
        default: Date.now()
    }
});

// Model
const BlogPost = mongoose.model('BlogPost', BlogPostSchema);

// Saving data to mongo Db
const data  = {
    title: 'welcome to the channel',
    body: 'I help people have software engineering programming and fun stuff like that'
};

const newBlogPost = new BlogPost(data); //instance of the model

// .save();
// newBlogPost.save( (error) => {
//     if (error) {
//         console.log('Opps and error happened');
//     } else {
//         console.log('Data has been saved');
//     }
// });

// http request logger
app.use(morgan('tiny'));

// routes
app.get('/api', (req, res) => {
    BlogPost.find({ })
        .then((data) => {
            console.log('Data: ', data)
            res.json(data);
        })
        .catch((error) => {
            console.log('Error: ', error)
        });
});

app.get('/api/name', (req, res) => {
    const data = {
        username: 'Briana MacKay',
        add: 19
    };
    res.json(data);
});

app.listen(PORT, console.log(`Server is starting at ${PORT}`));