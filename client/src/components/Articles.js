import React from 'react';
import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes';
import axios from 'axios';
import {Search} from './Search.js'
import '../App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker } from 'react-dates';
import { addDays } from 'date-fns';

const options = [
    { value: 'TDD', label: 'Test Driven Development' },
    { value: 'OOP', label: 'Object Orientated Programming' },
    { value: 'DynP', label: 'Dynamic Programming' },
];

export class Articles extends React.Component {

    constructor(props) {
        super(props);
        this.state ={
            startDate : null,
            endDate: null
        }
    }

    state = {
        description: "",
        selectedOptionSE: "",
        articles: []
    }


    // alertStartDate = () => {
    //     alert(this.state.startDate);
    // }
    // alertEndDate = () => {
    //     alert(this.state.endDate);
    // }

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

    handleSelectedSE = (event) => {
        // this.setState(
        //     { selectedOptionSE },
        //     () => console.log(`Option selected:`, this.state.selectedOptionSE)
        // )
        // console.log(event.target);
    }

    handleDescriptionInput = (e) => {
        this.setState({
            description: e.target.value,
        })
        console.log(e.target.value);
    }

    render() {
        
        return(
            <div className="div_border">
                <form>
                    <div className="tab">
                        <button className="tablinks">Tab 1</button>
                        <button className="tablinks">Tab 2</button>
                    </div> 

                    <br></br>

                    <label id="description">Description  </label>
                    <input id="description" type="text" onChange={this.handleDescriptionInput} placeholder="Enter search description"></input>

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

                    <br></br>
                    <label>Select SE Practice(s)</label>
                    <ReactMultiSelectCheckboxes 
                        onChange={this.handleSelectedSE}
                        options={options} 
                    />

                    <br></br>
                    <br></br>

                    <input type="submit" value="Save"></input>
                    <input type="submit" value="Search"></input>
                </form> 
                <div>
                    <Search articles={this.state.articles} term={this.state.description}/>
                </div>
            </div> 
        );
    }
}