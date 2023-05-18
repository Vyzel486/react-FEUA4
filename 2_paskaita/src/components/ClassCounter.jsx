import React, { Component } from 'react';

const style = {
    boxShadow: '0 0 10px grey',
    width: '150px',
    textAlign: 'center',
    padding: '10px',
    marginLeft: '1rem',
    borderRadius: '10px',
}

class ClassCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {count: 0};
  }

  increase = () => {
    this.setState(previouseState => ({
      count: previouseState.count + 1
    }));
  }

  decrease = () => {
    this.setState(previouseState => ({
      count: previouseState.count - 1
    }));
  }

  render() {
    return (
      <div style={style}>
        <h2>Counter</h2>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increase}>Increase</button>
        <button onClick={this.decrease}>Decrease</button>
      </div>
    );
  }
}

export default ClassCounter;