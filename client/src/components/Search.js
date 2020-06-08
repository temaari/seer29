import React from 'react';
import '../App.css';
import {ArticleCard} from './ArticleCard.js';

export class Search extends React.Component {
    
    
    displayArticles = (articles) => {
        if (!articles.length) return null;
        
        const SeString = props => {
            const seString = this.props.selectedSE.reduce (
                (preValue, currentValue) => preValue + " , " + currentValue.value
            ) ;
        };

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

        // let filterArticles = articles.filter(searchingByPractice(SeString)).map((article, i) => (
        //     <ArticleCard 
        //         index={i}
        //         title={article.title}
        //         author={article.author}
        //         month={article.month}
        //         year={article.year}
        //         annote={article.annote}
        //     />
        // ));
        
        // let nextArticleTry = filterArticles.filter((someFilter) => {
        //     return someFilter.sePractice.toLowerCase().includes(("403").toLowerCase());
        // });
        

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

// function searchingByPractice(SeString) {
//     return function (x) {
//         if (SeString !== null) {
//         return (x.sePractice.includes(SeString) || !SeString)
//         }
//     }   
// }

function searchingFor(term) {
    return function (x) {
        if (term !== null) {
        return (x.title.toLowerCase().includes(term.toLowerCase())
            || !term)
        }
    }   
}