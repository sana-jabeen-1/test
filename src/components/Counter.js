import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        count : 0
      }
    }
    //////////////set state with current state 
increment(){
    this.setState({
       count : this.state.count +1
    }, 
    // () => {
    //   console.log('call back value', this.state)
    // }
    )

   //console.log(this.state.count) 
}

///////////////set state according previous state
// increment(){
//         this.setState((prevState) => ({
//          count : prevState.count +1   
//         }))
//     }

// incrementfiv(){
// this.increment()
// this.increment()
// this.increment()
// this.increment()
// this.increment()
// }

  render() {
    return (
      <div>
        <div>Count - {this.state.count}</div>
      <button onClick={() => this.increment()}>Increment </button>
      </div>
    )
  }
}

export default Counter