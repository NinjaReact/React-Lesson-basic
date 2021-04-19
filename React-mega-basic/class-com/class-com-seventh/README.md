# Коллекция и атрибуты с созданием компонентов (правильный подход)

---

# Диструктуризация ↓

**const {posts} = this.state**

чтобы не писать постоянно this.state.НазваниеПоля

```JavaScript
  render(){
    const {posts} = this.state
    return (
		<div className='App'>
			<Posts posts={posts} />
		</div>
    )
  }
```

```JavaScript
export function Post (props){
    const {name , cb} = props
    return <h2 onClick={cb}>{name}</h2>
}
```

---

**Компоненты вкладываются в компоненты и передаются в виде props**

**Структура списка для вывода данных**

# App.js -> Posts -> Post

---

**App.js - главный фаил в которыq вызывает компонент Posts**

**↓**

**Posts.js - Компонент который отвечает за вывод списка (Вызывая сколько нужно компонент Post)**

**↓**

**Post.js - компонент который генерирует 1 элемент списка**

---

**App.jsx ↓**

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

  render(){
    const {posts} = this.state
    return (
		<div className='App'>
			<Posts posts={posts} />
		</div>
    )
  }
}

export default App

```

---

**Импортируем компонент Posts ↓**

```JavaScript
import {Posts} from './components/Posts'
```

**Вызываем компонент пост передавая в него массив объектов из State.posts ↓**

```JavaScript
  render(){
    return (
		<div className='App'>
			<Posts posts={this.state.posts} />
		</div>
    )
  }
```

---

---

**Posts.jsx ↓**

**export function Posts (props) ↓** - экспортируем функцию Posts

```JavaScript
import {Post} from './Post'

export function Posts (props) {
    return <div>
        {
            props.posts.map(post =>(
                <Post key={post.id} name={post.name} />
            ))
        }
    </div>
}
```

**Получили (props) , в props находится наш state , методом map мы вызываем компонент Post , столько раз сколько постов в props.posts(state.posts)**
_props - state_

**↓↓↓**

```JavaScript
    return <div>
        {
            props.posts.map(post =>(
                <Post key={post.id} name={post.name} />
            ))
        }
    </div>
```

**key={post.id}** - Для реакта задаем key из нашего id для каждого созданного компонента Post
**name={post.name}** - Передаем name для генерации контента Post

---

**Post.jsx**

**Post принимает в себя props (state.posts.name)(key не передается так как создан для помощи реакта и его нельзя использвоать)**

**↓↓↓**

```JavaScript
export function Post (props){
    return <h2>{props.name}</h2>
}
```

**функция возвращает h2 с props.name**

---

**Изменение state из компонента Post**

# App.jsx ↓

**Создаем функцию handleSomething (которая выводит на экран текст) ↓**

```JavaScript
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
```

**Передаем функцию компоненту ниже (Posts)**

```JavaScript
<Posts posts={this.state.posts} cb={this.handleSomething} />
```

**cb и posts - это ключи (деструктуризация) , заменяем this.handleSomething на cb**

# Posts.jsx ↓

```JavaScript
export function Posts (props) {
    return <div>
        {
            props.posts.map(post =>(
                <Post key={post.id} name={post.name} cb={props.cb}/>
            ))
        }
    </div>
}
```

**Также передаем нашу функцию cb в компонент ниже Post.jsx**
**(handleSomething = cb и поэтому мы делаем новый ключик cb и в него передаем props.cb)**

# Post.jsx

```JavaScript
export function Post (props){
    const {name , cb} = props
    return <h2 onClick={cb}>{name}</h2>
}
```

**На обрабочик onClick повесили функцию cb , при клике на пост срабатывает наша функция**
