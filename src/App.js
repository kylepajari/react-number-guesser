import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rightNumber: 5,
      correct: false
    };
  }
  guessnumber(num) {
    this.setState({ correct: this.state.rightNumber === num });
  }
  render() {
    return (
      <div className="App">
        {this.state.correct === true && (
          <div className="right">
            <p>Right Answer</p>
          </div>
        )}
        {!this.state.correct === true && (
          <div className="wrong">
            <p>Wrong Answer</p>
          </div>
        )}
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num, i) => {
          return (
            <div
              key={i}
              onClick={() => this.guessnumber(num)}
              className="num-box"
            >
              <p>{num}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
