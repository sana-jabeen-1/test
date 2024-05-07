import React, { Component } from 'react'
import ChildComm from './ChildComm'

export class ParentComm extends Component {

constructor(props) {
  super(props)

  this.state = {
     parentName : 'PArrrent'
  }
  this.greetPrrnt = this.greetPrrnt.bind(this)
}

greetPrrnt(childName){
    alert(`hello ${this.state.parentName} from ${childName}`)
}

  render() {
    return (
      <div>
        <ChildComm greetHandeler ={this.greetPrrnt} />
      </div>
    )
  }
}

export default ParentComm