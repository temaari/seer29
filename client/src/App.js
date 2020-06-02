import React from 'react';
import './App.css';
import {Articles} from './components/Articles.js';
import {Search} from '../components/Search';

class App extends React.Component {

  render() {

    return(
      <div className="app">
        <h2 className="header" >Welcome to the seer app</h2>
        <div>{Search}</div>
        <div> {/* Display Articles */}
          <Articles/>
        </div>
      </div>
    );
  }
}

export default App;