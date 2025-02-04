// Write your code here
import {Component} from 'react'
import './index.css'

class Counter extends Component {
  state = {count: 0}

  Increment = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="Container">
        <h1 className="heading">
          The Button has been clicked{' '}
          <span className="count-color">{count}</span> times
        </h1>
        <p className="para">click the button to increase the count</p>
        <div>
          <button className="button" type="button" onClick={this.Increment}>
            Click Me!
          </button>
        </div>
      </div>
    )
  }
}

export default Counter
