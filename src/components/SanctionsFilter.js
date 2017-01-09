import React, { Component } from 'react';
import '../styles/Filter.css'

class SanctionsFilter extends Component {
  constructor() {
    super();
    this.state = {
      sanctions: [],
      NBHA: false,
      NE4D: false,
      BBR: false,
      BRF: false,
      Open: false,
      WPRA: false,
    }
  }

checkSanctions(e) {
  var sanction = e.target.value;
  var sanctions = this.state.sanctions;
  this.setState({[sanction]:!this.state[sanction]});
  this.props.setSanctions(sanction)
  
}

setSanctions(sanction){
  debugger;
  if(this.state[sanction]===true){
    this.state.sanctions.push(sanction)
  }
}

// setSanctions(e) {
//   const sanctions= this.state.sanctions;
//   const checkedSanction = e.target.value
//   debugger;
//   if(sanctions.length === 0) {
//     sanctions.push(checkedSanction)
//   } else if(sanctions.length > 0) {
//     for(var i=0; i<sanctions.length; i++) {
//       if(checkedSanction == sanctions[i]){
//         sanctions.slice([i])
//      } else if(checkedSanction !== sanctions[i]) {
//       sanctions.push(checkedSanction)
//       }
//     }
//   }
//   console.log(sanctions)
// }

render() {

  return(
    <div>
    <form>
    <p className='sanction-box'> Sanction : </p>
    <div className='sanction-box'>
    <input
      className='sanction-check'
      type='checkbox'
      checked={this.state.NBHA}
      value='NBHA'
      onChange={(e) => this.checkSanctions(e)}
    />
    NBHA
    </div>

    <div className='sanction-box'>
    <input
      className='sanction-check'
      type='checkbox'
      checked={this.state.NE4D}
      value='NE4D'
      onChange={(e) => this.checkSanctions(e)}
    />
    NE4D
    </div>

    <div className='sanction-box'>
    <input className='sanction-check'
      type='checkbox'
      checked={this.state.BBR}
      value='BBR'
      onChange={(e) => this.checkSanctions(e)}
    />
    BBR
    </div>
    <div className='sanction-box'>
    <input
      className='sanction-check'
      type='checkbox'
      checked={this.state.BRF}
      value='BBR'
      onChange={(e) => this.checkSanctions(e)}
    />
    BRF
    </div>
    <div className='sanction-box'>
    <input
      className='sanction-check'
      type='checkbox'
      checked={this.state.Open}
      value='Open'
      onChange={(e) => this.checkSanctions(e)}
    />
    Open
    </div>
    <div className='sanction-box'>
    <input
      className='sanction-check'
      type='checkbox'
      checked={this.state.WPRA}
      value='WPRA'
      onChange={(e) => this.checkSanctions(e)}
    />
    WPRA
    </div>
    </form>
    </div>
    )
  }
}

export default SanctionsFilter
