import React from 'react';
import axios from 'axios';
import {Search} from './Search.js';
import '../App.css';

export class Articles extends React.Component {

    state = {
        articles: []
    };
      
    componentDidMount = () => {
        this.getArticles();
    };

    getArticles = () => {
        axios.get('/api')
            .then((response) => {
            const data = response.data;
            this.setState({ articles: data });
            console.log('Data has been received!!');
            })
            .catch(() => {
            console.log("error error!!!!")
            // alert('Error retrieving data');//TO-DO:remove this later and deal with error
            });
    };


    displayArticles = (articles) => {
        if (!articles.length) return null;

        return articles.map((article, index) => (
            <div key={index} className="articles_display">
                <h3 className="">{article.author}</h3>
                <p>{article.title}</p>
            </div>
        ));
    };

    render() {
        return(
            <div className="blog-">
                <Search/>
                {this.displayArticles(this.state.articles)}
            </div>
        )
    }
}