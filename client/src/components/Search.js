import React from 'react';
import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes';
import '../App.css';


const options = [
    { value: 'TDD', label: 'Test Driven Development' },
    { value: 'OOP', label: 'Object Orientated Programming' },
    { value: 'DynP', label: 'Dynamic Programming' },
  ];

export class Search extends React.Component {

    state = {
        description: "",
        selectedOptionSE: ""
    }

    handleSelectedSE = selectedOptionSE => {
        this.setState(
            { selectedOptionSE },
            () => console.log(`Option selected:`, this.state.selectedOptionSE)
        )
    }

    handleDescriptionInput = (e) => {
        this.setState({
            description: e.target.value
        })
    }

    render() {
        const { description } = this.state;
        const { selectedOptionSE } = this.state;
        
        return(
            <div class="div_border">
                <form>
                    <div class="tab">
                        <button onClick="" class="tablinks">Tab 1</button>
                        <button onClick="" class="tablinks">Tab 2</button>
                    </div> 

                    <br></br>

                    <label for="description">Description  </label>
                    <input id="description" type="text" onChange="this.handleDescriptionInput()" placeholder="Enter search description"></input>

                    <br></br>
                    <br></br>

                    {/* Date range */}
                    {/* <label for="dateRange">Date Range</label> */}

                    <br></br>
                    <label>Select SE Practice(s)</label>
                    <ReactMultiSelectCheckboxes 
                        value={selectedOptionSE}
                        onChange={this.handleSelectedSE}
                        options={options} 
                    />

                    <br></br>
                    <br></br>

                    <input type="submit" onChange="" value="Save"></input>
                    <input type="submit" onClick="this.getSelectedConstraints()" value="Search"></input>
                </form> 
            </div> 
        );
    }
}