import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

fetch("http://localhost:9000/timer")
  .then((res) => res.text())
  .then((res) => {
    console.log("res: " + JSON.stringify(res));
    console.log("time: " + JSON.parse(res).timerValue);
  });

class App extends Component {
  constructor(props) {
    //TODO
    super(props);
    this.callAPI();
    this.state = { time: 0 };

    //console.log("in constructor");
  }

  callAPI() {
    console.log("in callAPI");

    setInterval(() => {
      var href = window.location.href;
      var url = href.substring(0, href.length - 6);
      console.log(url);
      fetch(`http://3.10.159.115:9000/timer/`)
        .then((res) => res.text())
        .then((res) => {
          console.log(JSON.stringify(res));
          var time = JSON.parse(res).timerValue;
          this.setState({ time: time });
        });
    }, 1000);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p className="App-intro">{this.state.time}</p>
          <p>Hello Boozer!</p>
        </header>
      </div>
    );
  }
}

export default App;
