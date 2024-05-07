import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import Greets from "./components/Greets";
import Welcome from "./components/Welcome";
import Message from "./components/Message";
import Counter from "./components/Counter";
import ParentComm from "./components/ParentComm";
import Nmaelist from "./components/Nmaelist";
import PersonList from "./components/PersonList";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <PersonList />
        <Nmaelist /> */}
        <ParentComm />
        <Message />
        <Counter />
        {/* <Greets name = "sana" age = "33">
      <p>just for additonal information </p>
     </Greets>
     <Greets name = "Sana JAbeen" age = "32" />
     <Greets name = "sana Zeeshan" age = "31" />
    <Welcome name = "sana in class" age = "33" >
    </Welcome>
    <Welcome name = "sanazee in class" age = "33" >
    </Welcome>
    <Welcome name = "sanaZeeshan in class" age = "33" /> */}
      </div>
    );
  }
}
export default App;
