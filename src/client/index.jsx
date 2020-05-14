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
    this.tick();
    fetch('http://localhost:8080/costPerDay')
    .then((response) => response.json())
    .then((data) => {
      this.setState({data: data})
      })
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
        <Clock time={this.state.time} data={this.state.data} />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'))