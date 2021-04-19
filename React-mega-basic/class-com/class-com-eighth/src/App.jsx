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
    removePost = (id) => {
        this.setState({posts : this.state.posts.filter(post => post.id !== id)})
    }
    render(){
        const {posts} = this.state
        return(
            <div>
                <Posts posts={posts} removePost={this.removePost}/>
            </div>
        )
    }
}

export default App