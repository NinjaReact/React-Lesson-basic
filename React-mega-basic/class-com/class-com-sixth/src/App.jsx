import React ,{Component} from 'react'

class App extends Component{
    state ={
        posts:[
            {id:'abc1' , name: 'Js Basic'},
            {id:'abc2' , name: 'Js Afvanced'},
            {id:'abc3' , name: 'React JS'},
        ]
    }

    render(){
        return (
            <div className='App'>
                {this.state.posts.map((post) =>(
                    <h2 key={post.id}>{post.name}</h2>
                ))}
            </div>
        )
    }
}

export default App