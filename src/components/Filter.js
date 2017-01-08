import React, { Component } from 'react';

class Filter extends Component {
  constructor() {
    super();
    this.state = {
      sanctions: [],
      state: '',
      addedmoney: '',
      date: '',
    }
  }

filterByDate(e) {
  this.setState({date: e.target.value})
  let filteredEvents = this.props.eventList.filter(event => {
    console.log(event.date, e.target.value)
  })
}

filterByState(e) {
  this.setState({state: e.target.value})
  if (this.state.state) {
  let filteredEvents = this.props.eventList.filter(event => {
    return event.state.toUpperCase().match(e.target.value)
  })
  this.props.filteredDisplay(filteredEvents);
} else {
  this.props.filteredDisplay(null);
  }
}

filterByMoney(e) {
  this.setState({addedmoney: e.target.value})
  if (this.state.addedmoney){
  let filteredEvents = this.props.eventList.filter(event => {
    return event.addedmoney >= e.target.value
  })
  console.log(filteredEvents)
  this.props.filteredDisplay(filteredEvents);
  } else {
    this.props.filteredDisplay(null)
  }
}


  setSanctions(e) {
    const sanctions= this.state.sanctions
    const checkedS = e.target.value
    if(!sanctions.length){
      sanctions.push(checkedS)
    } else if(sanctions.length){
    for(var i=0; i<sanctions.length; i++) {
      if(sanctions[i] === checkedS ) {
        return
      } else {
       sanctions.push(checkedS)
      }
    }
  }
  this.setFilters();
}

setFilters(){
  const filters= this.state
  this.props.setFilters(filters)
}



render () {

  return (
    <div>
    <p> Sanction : </p>
    <form>
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

    <p> From Date : </p>
    <input
    type='date'
    value={this.state.date}
    onChange={(e) => this.filterByDate(e)}
    />
  <p> Added Money Greater Than </p>
    $ <input
    type='value'
    value={this.state.addedMoney}
    onChange={(e)=> this.filterByMoney(e)}
    />
    <p> State : </p>
    <select
      className='state-dropdown'
      value={this.state.state}
      onChange={(e)=> this.filterByState(e)}
    >
  	<option value="AL">Alabama</option>
  	<option value="AK">Alaska</option>
  	<option value="AZ">Arizona</option>
  	<option value="AR">Arkansas</option>
  	<option value="CA">California</option>
  	<option value="CO">Colorado</option>
  	<option value="CT">Connecticut</option>
  	<option value="DE">Delaware</option>
  	<option value="DC">District Of Columbia</option>
  	<option value="FL">Florida</option>
  	<option value="GA">Georgia</option>
  	<option value="HI">Hawaii</option>
  	<option value="ID">Idaho</option>
  	<option value="IL">Illinois</option>
  	<option value="IN">Indiana</option>
  	<option value="IA">Iowa</option>
  	<option value="KS">Kansas</option>
  	<option value="KY">Kentucky</option>
  	<option value="LA">Louisiana</option>
  	<option value="ME">Maine</option>
  	<option value="MD">Maryland</option>
  	<option value="MA">Massachusetts</option>
  	<option value="MI">Michigan</option>
  	<option value="MN">Minnesota</option>
  	<option value="MS">Mississippi</option>
  	<option value="MO">Missouri</option>
  	<option value="MT">Montana</option>
  	<option value="NE">Nebraska</option>
  	<option value="NV">Nevada</option>
  	<option value="NH">New Hampshire</option>
  	<option value="NJ">New Jersey</option>
  	<option value="NM">New Mexico</option>
  	<option value="NY">New York</option>
  	<option value="NC">North Carolina</option>
  	<option value="ND">North Dakota</option>
  	<option value="OH">Ohio</option>
  	<option value="OK">Oklahoma</option>
  	<option value="OR">Oregon</option>
  	<option value="PA">Pennsylvania</option>
  	<option value="RI">Rhode Island</option>
  	<option value="SC">South Carolina</option>
  	<option value="SD">South Dakota</option>
  	<option value="TN">Tennessee</option>
  	<option value="TX">Texas</option>
  	<option value="UT">Utah</option>
  	<option value="VT">Vermont</option>
  	<option value="VA">Virginia</option>
  	<option value="WA">Washington</option>
  	<option value="WV">West Virginia</option>
  	<option value="WI">Wisconsin</option>
  	<option value="WY">Wyoming</option>
  </select>
    </div>
    )
  }
}

export default Filter
