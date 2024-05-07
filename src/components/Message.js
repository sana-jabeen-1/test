import React , {Component} from "react";

class Message extends Component {
    constructor(){
        super()
        this.state = {
            msg : 'welcome Visitor'
        }
    }
 changeMessag(){
    this.setState({
        msg : 'Thank You for Visiting '
    })
 }


    render(){

    return (
        <div>
    <h3> {this.state.msg}</h3>
    <button onClick={() => this.changeMessag()}>Subscribe</button>
    
    </div>
    )
    
}
}
export default Message