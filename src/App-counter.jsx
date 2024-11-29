import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { count: 1 };
    this.handleDecrease = this.handleDecrease.bind(this);
    this.handleIncrease = this.handleIncrease.bind(this);
  }

  handleDecrease() {
    this.setState((curState) => {
      return { count: curState.count - 1 };
    });
  }
  handleIncrease() {
    this.setState((curState) => {
      return { count: curState.count + 1 };
    });
  }

  render() {
    const date = new Date("Novembe 24 2025");
    date.setDate(date.getDate() + this.state.count);
    return (
      <div>
        <button onClick={this.handleDecrease}>-</button>
        <span>{date.toDateString()}</span>
        <span>{this.state.count}</span>
        <button onClick={this.handleIncrease}>+</button>
      </div>
    );
  }
}

export default App;
