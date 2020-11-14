import React, { Component } from 'react'
import './../styles/instructions.css'

class Instructions extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="instructions">
        Follow the instructions on the README to get started!
        {this.props.shouldDisplayImage && (
          <img
            className="instructions__logo"
            src="https://i.imgur.com/0bXP0MU.png"
            alt="Nadeshiko Kawaii"
          />
        )}
      </div>
    )
  }
}

export default Instructions
