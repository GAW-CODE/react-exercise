import React, { Component } from 'react'

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: this.props.initialCount
    }
  }

  handleIncrement = () => {
    let current = this.state.count
    this.setState({
      count: current + 1
    })
  }

  handleDecrement = () => {
    let current = this.state.count
    this.setState({
      count: current - 1
    })
  }

  render() {
    return (
      <div className="container">
        <label>Count: {this.state.count}</label>
        <br />
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.handleDecrement}>Decrement</button>
      </div>
    )
  }
}

export default Counter
