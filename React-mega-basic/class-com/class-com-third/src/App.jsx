import React, {Component} from 'react'
import './App.css'

class App extends Component {
	state = {
		count: 0,
		countThree:0,
		countPlusMinus : 0
	}

	handleClick = () =>{
		this.setState({count: this.state.count + 1})
	}

	handleClickPlusThree = () =>{
		this.setState((prevState) => ({countThree : prevState.countThree + 1}))
		this.setState((prevState) => ({countThree : prevState.countThree + 1}))
		this.setState((prevState) => ({countThree : prevState.countThree + 1}))
	}


	handleClickMinus = () =>{
		this.setState({countPlusMinus : this.state.countPlusMinus - 1})
	}
	handleClickPlus = () =>{
		this.setState({countPlusMinus : this.state.countPlusMinus + 1})
	}


	render() {
		return <div className='test'>
			<div className='plus'>
				<button onClick={this.handleClick}>plus 1</button>
				<p>{this.state.count}</p>
			</div>
			<div className='plus'>
				<button onClick={this.handleClickPlusThree}>plus 3</button>
				<p>{this.state.countThree}</p>
			</div>
			<div className='plus'>
				<button onClick={this.handleClickMinus}>Minus</button>
				<p>{this.state.countPlusMinus}</p>
				<button onClick={this.handleClickPlus}>Plus</button>
			</div>
		</div>
	}
}

export default App
