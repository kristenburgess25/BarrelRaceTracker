import React, { Component } from 'react';
import '../styles/Filter.css'

class SanctionsFilter extends Component {
  constructor() {
    super();
    this.state = {
      sanctions: [],
    }
  }

setSanctions(e) {
  const sanctions= this.state.sanctions;
  const checkedSanction = e.target.value
  if(sanctions.length === 0) {
    sanctions.push(checkedSanction)
  } else if(sanctions.length > 0) {
    for(var i=0; i<sanctions.length; i++) {
      if(checkedSanction !== sanctions[i]) {
       sanctions.push(checkedSanction)
      }
    }
  }
  this.props.setSanctions(sanctions)
}

render() {

  return(
    <div>
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
      value='Better Barrel Races'
      onChange={(e) => this.setSanctions(e)}
    />
    BBR
    </div>
    <div className='sanction-box'>
    <input
      className='sanction-check'
      type='checkbox'
      value='BBR'
      onChange={(e) => this.setSanctions(e)}
    />
    BRF
    </div>
    <div className='sanction-box'>
    <input
      className='sanction-check'
      type='checkbox'
      value='Open'
      onChange={(e) => this.setSanctions(e)}
    />
    Open
    </div>
    <div className='sanction-box'>
    <input
      className='sanction-check'
      type='checkbox'
      value='WPRA'
      onChange={(e) => this.setSanctions(e)}
    />
    WPRA
    </div>
    </form>
    </div>
    )
  }
}

export default SanctionsFilter
