import React, {Component} from 'react'
import {Posts} from './components/Posts'

class App extends Component {
	state = {
		posts: [
			{id: 'abc1', name: 'Js Basic'},
			{id: 'abc2', name: 'Js Afvanced'},
			{id: 'abc3', name: 'React JS'},
		],
	}

	handleSomething = () =>{
		console.log('setState update')
	}

	render(){
		return (
			<div className='App'>
				<Posts posts={this.state.posts} cb={this.handleSomething} />
			</div>
		)
	}
}

export default App
