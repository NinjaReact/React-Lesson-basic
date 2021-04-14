# Состояние

#### В классовых компонентах все начинается с this.

##### В классовом подходе все изменения состояния в state

**this.state** - Объект в котором хранятся поля для управления состоянием

```javascript
	constructor(props) {
		super(props)
		this.state = {
			count: 0,
			someKey:false
		}
	}
```

---

**Для вывода значения поля count**

```javascript
	render() {
		return <div className='test'>
			<p>{this.state.count}</p>
		</div>
	}
```

_Создаться параграф(**p**) с значением 0 , так как в объекте state ={count : 0}_

---

**Базовое изменение состояния ↓**

```javascript
	handleClick = () =>{
		this.setState({count: this.state.count + 1})
	}
	render() {
		return <div className='test'>
			<button onClick={this.handleClick}>{this.state.count}</button>
		</div>
	}
```

**Создаем метод handleClick ↓**

```javascript
handleClick = () => {
	this.setState({count: this.state.count + 1})
}
```

---

**setState - react метод для изменения состояния , котый изменяет наш объект state ,не делая новый**

#### Так как js иммутабельнный (_при изменения объекта , не изменяется старый объект , создается новый_)

_как делать нельзя ↓_

```javascript
handleClick = () => {
	this.state.count + 1}
}
```

---

```javascript
		return <div className='test'>
			<button onClick={this.handleClick}>{this.state.count}</button>
		</div>
	}
```

**Создаем button и вешаем на него обработчик(onClick) в котором вызываем нашу функцию this.handleClick (без скобок)**

_B теле button прописываем {this.state.count} , для отображения на кнопке поля count_

---

**Можно убрать конструктор и оставить только state={} без this**

```javascript
state = {
	count: 0,
}
```

---

**Функция добавит к значению count - 1** _так как после вызова каждой операции функция setState получает текущее значение **(0)** добавляет к нему 1 отправляет еденичку в state и не запоминает изменений опять отправляет **0** при повтороном вызове setState_

```javascript
handleClick = () => {
	this.setState({count: this.state.count + 1})
	this.setState({count: this.state.count + 1})
	this.setState({count: this.state.count + 1})
}
```

**Как же менять state в функции вызывая изменения 1 поля несколько раз?**

```javascript
handleClickPlusThree = () => {
	this.setState(prevState => ({countThree: prevState.countThree + 1}))
	this.setState(prevState => ({countThree: prevState.countThree + 1}))
	this.setState(prevState => ({countThree: prevState.countThree + 1}))
}
```

---

## **В setState мы передаем функцию prevState (которая принимает в себя прмоежуточное значение) и и в теле фенукии мы изменяем не state(_this.state.countThree_) , а функцию (prevState.countThree)**

# Создал поле в объекте state = {

    count: 0,
    countThree : 0

}

# Для этого примера

---

**Без стрелочных функций ↓**

```javascript
class App extends Component {
	constructor() {
		super()
		this.state = {
			count: 0,
		}
		this.handleClick = this.handleClick.bind(this)
	}
	handleClick = () => {
		this.setState({count: this.state.count + 1})
	}
}
```

```javascript
<button onClick={() => this.setState({count: this.state.count + 1})}>plus 1</button>
```

**style**

```javascript
<p style={{margin: '15px'}}></p>
<p style={sr}></p>


sr = {
    margin : '21px'
}
```
