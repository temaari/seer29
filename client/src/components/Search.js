import React from 'react';
import '../App.css';
import MUIDataTable from "mui-datatables";

export class Search extends React.Component {
    
    displayArticles(articles) {
        if (!articles.length) return null;
        const columns = [
            {
                name: "title",
                label: "Title",
                options: {
                    filter: true,
                    sort: true,
                }
            },
            {
                name: "author",
                label: "Author",
                options: {
                    filter: true,
                    sort: false,
                }
            },
            {
                name: "year",
                label: "Year",
                options: {
                    filter: true,
                    sort: true,
                }
            },
            {
                name: "seMethod",
                label: "SE Method",
                options: {
                    filter: true,
                    sort: true,
                }
            },
            {
                name: "result",
                label: "Result",
                options: {
                    display: "false",
                    filter: true,
                    sort: false,
                }
            },
        ];

        const data = [];

        articles.forEach(element => {
            data.push({
                title: element.title,
                author: element.author,
                year: element.year,
                seMethod: element.sePractice
            });
        });

           
        const options = {
            filterType: 'dropdown',
            disableToolbarSelect:true,
            print:false,
            download:false,
            search:false
        };

        return (
            <div>
                <MUIDataTable
                    // title={"Employee List"}
                    data={data}
                    columns={columns}
                    options={options}
                />
            </div>
        )
    
    }

    render() {
        return (
            <div className="blog-">
                {this.displayArticles(this.props.articles)}
            </div>
        )
    }
        
}

