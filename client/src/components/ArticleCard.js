import React from 'react';
import '../App.css';

export class ArticleCard extends React.Component {

    render() {
        console.log(this.props.index)
        return (
            <div key={this.props.index} className="articles_display">
                <h3>{this.props.title}</h3>
                <p>Author {this.props.author}</p>
                <p>Date {this.props.month} {this.props.year}</p>
                <p>Annote: {this.props.annote}</p>
                <p>results</p>
            </div>
        )
    }
}

