import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './Clock.jsx'

class App extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
      time : 'value',
      data: 'stuff'
		};
	}

  componentDidMount () {
    this.tick()
  }

  tick() {
    setInterval(() => {
      var date = new Date().toLocaleTimeString();
      this.setState({time: date})
    }, 1000)
  }

	render () {
		return (
			<div>
        <span>The time is: </span>
        <Clock time={this.state.time} />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'))