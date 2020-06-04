import React, { Component } from 'react';
import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker } from 'react-dates';
import { addDays } from 'date-fns';


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
    constructor(props) {
        super(props);
        this.state ={
            startDate : null,
            endDate: null
        }
    }

    // alertStartDate = () => {
    //     alert(this.state.startDate);
    // }
    // alertEndDate = () => {
    //     alert(this.state.endDate);
    // }

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

                    <label for="date range">Choose Date Range -</label>
                    {/* <br/> */}
                    <DateRangePicker
                        startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                        startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                        endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                        endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                        startDatePlaceholderText="from"
                        endDatePlaceholderText="to"
                        onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
                        focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                        onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
                        /* numberOfMonths={()=> 1}  */
                        isOutsideRange={()=> false} //show previous dates as well 
                        maximumDate={addDays(new Date(), 0)} //should only allow "to" is current date and not future dates
                        showClearDates={true} //allow us to clear dates
                        
                        
                    />
                    {/* Date range */}
                    {/* <label for="dateRange">Date Range</label> */}

                    {/* this is for the buttons to show the dates chosen */}
                    {/* <button onCLick={this.alertStartDate}>Click Me for Start Date</button> 
                    <button onCLick={this.alertEndDate}>Click Me for Start Date</button> */}

                    <br/>
                    <br/>
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