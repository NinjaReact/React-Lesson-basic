#Классовые компоненты

```JavaScript
class App extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className='App'>
				<h2>Hello World</h2>
			</div>
		)
	}
}
```

---

**Конструткор класса принимающий props**

_Конструткор можно не писать так как , React подразумевает его наличие _

```JavaScript
	constructor(props) {
		super(props)
	}
```

---

---

**Класс не может возвращать что то , для этого добавили метод render()**

```JavaScript
	render() {
		return (
			<div className='App'>
				<h2>Hello World</h2>
			</div>
		)
	}
```

---

---

**Класс App наследуется (extends) от React.Components**

```JavaScript
class App extends React.Component
```

**чтобы не писать React.Components**
_необходимо сделать import_

```JavaScript
import React, {Component} from 'react'
class App extends Component
```

---
