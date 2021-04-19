# Микро ТУДУ

**App.jsx**

```JavaScript
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
```

**Функция removePost - принимает в себя id определенного поста**

**чтобы все id не были равны полученному id ↓**

```JavaScript
    removePost = (id) => {
        this.setState({posts : this.state.posts.filter(post => post.id !== id)})
    }
```

**передаем функцию в Posts**

```JavaScript
 <Posts posts={posts} removePost={this.removePost}/>
```

---

**Posts.js**

```JavaScript
export function Posts (props) {
    return(
        <div>
            {props.posts.map(post =>(
                <Post key={post.id} id={post.id} name={post.name} removePost={props.removePost}/>
            ))}
        </div>
    )
}
```

## **передаем функцию в Post {props.removePost} (props не post )**

**Колбек функцию в обработчик onClick и передаем в нее id поста**

```JavaScript
export function Post (props){
    const {id , name , removePost} = props
    return(
        <h2>{name} <button onClick={() => removePost(id)}>delete</button></h2>
    )
}
```
