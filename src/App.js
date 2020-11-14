import React, { Component } from 'react'
import { Instructions } from './components'
import './styles/app.css'
import Counter from './components/Counter.component'

class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>Hello World!</h1>
        <Instructions
          shouldDisplayImage={true}
          items={['instruction 1', 'instruction2', 'instruction3']}
        />
        <Counter initialCount={1} />
      </div>
    )
  }
}

export default App
