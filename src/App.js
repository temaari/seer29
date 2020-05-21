import React from 'react';
import './App.css';

export class App extends React.Component {
 
  render() {
    return (
      <div className="App">
        <header className="App-header">SEER</header>
        <div>
        <p>
          Welcome to the SEER Search Page
        </p>
        <input></input>
        <input type="Button" value="Search"></input>
        </div>
        <div>
          <table>
            <th>
              Name
            </th>
            <th>
              Article
            </th>
            <th>
              Authors
            </th>
          </table>
        </div>
      </div>
    )
  }
}