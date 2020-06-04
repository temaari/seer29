import React from 'react';
import '../App.css';
import {ArticleCard} from './ArticleCard.js';

export class Search extends React.Component {
    
    displayArticles = (articles) => {
        if (!articles.length) return null;
        
        let filterArticles = articles.filter(searchingFor(this.props.term)).map((article, i) => (
            <ArticleCard 
                index={i}
                title={article.title}
                author={article.author}
                month={article.month}
                year={article.year}
                annote={article.annote}
            />
        ));
        return filterArticles;
    };
    
    render() {
        return(
            <div className="blog-">
                {this.displayArticles(this.props.articles)}
            </div>
        )
    }
}

function searchingFor(term) {
    return function (x) {
        if (term !== null) {
        return (x.title.toLowerCase().includes(term.toLowerCase())
            || !term)
        }
    }   
}