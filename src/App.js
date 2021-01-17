import React, { Component } from "react";
import Button from "./Button";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
    };
    // this.onClickHandler = this.onClickHandler.bind(this);
  }

  // onClickHandler(payLoad) {
  onClickHandler = (payLoad) => {
    // console.log("click");
    this.setState({ number: this.state.number + payLoad });
  };

  render() {
    return (
      <div className="App">
        <Display value={this.state.number} />
        {/* <button onClick={this.onClickHandler}>증가버튼</button> */}
        {/* <button onClick={() => this.onClickHandler(1)}>증가버튼</button> */}
        <Button clickHandler={() => this.onClickHandler(1)}>증가버튼</Button>
        <Button clickHandler={() => this.onClickHandler(-1)}>감소버튼</Button>
      </div>
    );
  }
}

const Display = ({ value }) => (
  <div>
    <h1>{value}</h1>
  </div>
);

export default App;
