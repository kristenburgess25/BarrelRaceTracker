import React, { Component } from 'react';
import '../styles/Filter.css'
import LocationFilter from './LocationFilter'
import SanctionsFilter from './SanctionsFilter'

class Filter extends Component {
  constructor() {
    super();
    this.state = {
      sanctions: [],
      addedmoney: '',
      date: '',
      state: '',
    }
  }

  filterByState(selectedState) {
    if(selectedState){
      let filteredEvents = this.props.eventList.filter(event => {
        return event.state.toUpperCase().match(selectedState)
      })
      this.props.filteredDisplay(filteredEvents);
    } else {
      this.props.filteredDisplay(null);
      }
    }

filterByDate(e) {
  this.setState({date: e.target.value});
  if (e.target.value) {
  let filteredEvents = this.props.eventList.filter(event => {
    const formattedDates = Date.parse(event.date);
    const selectedDate = Date.parse(e.target.value);
    if(formattedDates >= selectedDate ) {
      return event
    }
  })
  this.props.filteredDisplay(filteredEvents);
} else {
  this.props.filteredDisplay(null);
  }
}


filterByMoney(e) {
  this.setState({addedmoney: e.target.value});
let filteredEvents = this.props.eventList.filter(event => { if (event.addedmoney >= e.target.value){
    return event
    }
  })
if(filteredEvents){
  this.props.filteredDisplay(filteredEvents);
} else {
    this.props.filteredDisplay(null)
  }
}

filterBySanction(sanctions){
  if(sanctions){
    let filteredEvents = this.props.eventList.filter(event => {
      return event.sanction.includes(sanctions)
    })
    this.props.filteredDisplay(filteredEvents);
  } else {
    this.props.filteredDisplay(null);
    }
}



render () {

  const { eventList } = this.props

  return (
    <div className='filter-form'>
    <SanctionsFilter
      setSanctions={this.filterBySanction.bind(this)}
      />
    <br></br>
    <p className='filter-date'> From Date : </p>
    <input
    className='filter-date'
    type='date'
    value={this.state.date}
    onChange={(e) => this.filterByDate(e)}
    />
  <br></br>
  <p className='filter-money'> Added Money > </p>
    $ <input
    className='filter-money'
    type='value'
    value={this.state.addedMoney}
    onChange={(e)=> this.filterByMoney(e)}
    />
  <br></br>
  <LocationFilter
    filterByState={this.filterByState.bind(this)}
    eventlist={eventList}
  />
<button
  className='set-filters'
 >
Set Filters
</button>
    </div>
    )
  }
}

export default Filter
