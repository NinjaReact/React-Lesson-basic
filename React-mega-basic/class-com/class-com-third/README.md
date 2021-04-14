# Состояние

#### В классовых компонентах все начинается с this.

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

_как леоаит нельзя ↓_

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

_B теле button прописываем {this.state.count} , для отображения на кнопке поля state_

---
