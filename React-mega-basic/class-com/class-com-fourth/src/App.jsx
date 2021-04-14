import React , {Component} from 'react'

class App  extends Component{
  state = {
    post : [],
    loading : true,
    comments: []
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(responce => responce.json())
    .then(data => this.setState({post: data , loading : false}))

    this.timerId = setInterval(()=> {
      fetch('https://jsonplaceholder.typicode.com/comments')
      .then(responce => responce.json())
      .then(data => this.setState({comments: data })) 
    },3000)
  }
  componentDidUpdate(){
    console.log('componentDidUpdate')
  }
  componentWillUnmount(){
    clearInterval(this.timerId)
    console.log('componentWillUnmount')
  }

  render(){
    return(
      <div>
        {this.state.loading ? <h3>loading...</h3> : 
        <h3>{this.state.post.length} was loaded</h3>}
      </div>
    )
  }
}
export default App