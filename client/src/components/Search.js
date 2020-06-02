import React from 'react';
import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes';
import '../App.css';

const options = [
    { value: 'TDD', label: 'Test Driven Development' },
    { value: 'OOP', label: 'Object Orientated Programming' },
    { value: 'DynP', label: 'Dynamic Programming' },
  ];

export class Search extends React.Component {
    

    render() {
        return(
            <div class="div_border">
                <form>
                    <div class="tab">
                        <button onClick="" class="tablinks">Tab 1</button>
                        <button onClick="" class="tablinks">Tab 2</button>
                    </div> 

                    <br></br>

                    <label for="description">Description  </label>
                    <input id="description" type="text" placeholder="Enter search description"></input>

                    <br></br>
                    <br></br>
        
                    {/* Date range */}
                    {/* <label for="dateRange">Date Range</label> */}

                    <label>Select SE Practice(s)</label>
                    <ReactMultiSelectCheckboxes options={options} />

                    <br></br>

                    <input type="submit" value="Save"></input>
                    <input type="submit" value="Search"></input>
                </form> 
            </div> 
        );
    }
}