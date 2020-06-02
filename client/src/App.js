import React from 'react';
import axios from 'axios';
import './App.css';
import {Search} from './components/Search.js';

class App extends React.Component {

  state = {
    author: '',
    title: '',
    journal: '',
    year: '',
    month: '',
    volume: '',
    number: '',
    pages: '',
    eprint: '',
    eprinttype: '',
    eprintclass: '',
    annote:'',
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

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  submit = (event) => {
    event.preventDefault();

    const payload = {
      author: this.state.author,
      title: this.state.title,
      journal: this.state.journal,
      year: this.state.year,
      month: this.state.month,
      volume: this.state.volume,
      number: this.state.number,
      pages: this.state.pages,
      eprint: this.state.eprint,
      eprinttype: this.state.eprinttype,
      eprintclass: this.state.eprintclass,
      annote: this.state.annote
    };

    axios({
      url: '/api/save',
      method: 'POST',
      data: payload
    })
      .then(() => {
        console.log('Data has been sent to the server');
        this.resetUserInputs();
        this.getArticles();
      })
      .catch(() => {
        console.log('Internal server error');
      });;
  };

  resetUserInputs = () => {
    this.setState({
      author: '',
      title: '',
      journal: '',
      year: '',
      month: '',
      volume: '',
      number: '',
      pages: '',
      eprint: '',
      eprinttype: '',
      eprintclass: '',
      annote:''
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

    console.log('State', this.state);

    return(
      <div className="app">
        <h2 className="header" >Welcome to the seer app</h2>
        <div>{Search}</div>

        <div className="blog-">
          {this.displayArticles(this.state.articles)}
        </div>
      </div>
    );
  }
}

export default App;