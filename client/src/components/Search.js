import React from 'react';
import '../App.css';

export class Search extends React.Component {
    
    render() {
        return(
            <div>
                <form>
                <div>
                    <input placeholder="Enter search description"></input>   
                    <button>Search</button>
                </div>
                <div class="tab">
                    <button onClick="" class="tablinks">Tab 1</button>
                    <button onClick="" class="tablinks">Tab 2</button>
                </div> 
    
                <div>
                    {/* Date range */}
                    <input></input>
                </div>
    
                <div id="sePractice">
                    <span>SE Practice/Methods</span>
                    <ul>
                        <li><input type="checkbox"/>TDD</li>
                        <li><input type="checkbox"/>Algorithms</li>
                        <li><input type="checkbox"/>Object Orientated Applications</li>
                        <li><input type="checkbox"/>Unit Tests</li>
                    </ul>
                </div>
                </form>
            </div>
        )
    }
}