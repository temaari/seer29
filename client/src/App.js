import React from 'react';
import './App.css';
import {Articles} from './components/Articles.js';

class App extends React.Component {

  render() {

    return(
      <div className="app">
        <h2 className="header" >Welcome to the seer app</h2>

        <div> {/* Display Articles */}
          <Articles/>
        </div>
      </div>
    );
  }
}

export default App;