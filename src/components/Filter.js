import React, { Component } from 'react';
import '../styles/Filter.css'
import LocationDropdown from './LocationDropdown'

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

  setSanctions(e) {
    const sanctions= this.state.sanctions;
    const checkedS = e.target.value
    if(sanctions.length){
    for(var i=0; i<sanctions.length; i++) {
      if(sanctions[i] === checkedS ) {
        return
      } else {
       sanctions.push(checkedS)
      }
    }
  } else if(!sanctions.length){
      sanctions.push(checkedS)
    }
  this.checkSanctions(sanctions);
}

checkSanctions(sanctions) {
  console.log(sanctions)
}


render () {

  const { eventList } = this.props

  return (
    <div className='filter-form'>
    <form>
    <p className='sanction-box'> Sanction : </p>
    <div className='sanction-box'>
    <input
      className='sanction-check'
      type='checkbox'
      value='NBHA'
      onChange={(e) => this.setSanctions(e)}
    />
    NBHA
    </div>

    <div className='sanction-box'>
    <input
      className='sanction-check'
      type='checkbox'
      value='NE-4D'
      onChange={(e) => this.setSanctions(e)}
    />
    NE4D
    </div>

    <div className='sanction-box'>
    <input className='sanction-check'
      type='checkbox'
      value='BBR'
      onChange={(e) => this.setSanctions(e)}
    />
    BBR
    </div>
    </form>
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
  <LocationDropdown
    filterByState={this.filterByState.bind(this)}
    eventlist={eventList}
  />
    </div>
    )
  }
}

export default Filter
