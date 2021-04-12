# JSX BASIC

**Файл формат js и jsx одно и тоже , просто в формате jsx есть подсказки(легче писать разметку)**

_в тегах можно вставить тернарный оператор если нету props.name , то название книги = 'default book'_

**h2** {props.name ? props.name : 'default book'} **/h2**

_так как это jsx то в тернанорм операторе можно вернуть тег_
**h2** {props.name ? **span**{props.name}**/span** : 'default book'} **/h2**

---

_В теги можно помещать не только переменные , но и текст_
**p** Книга : {props.year} года **/p**

---

**В тагах JSX нету class , используют className**

---

**Для комментарий в JSX необходимо взять теги в {} и внутри них поставить комментарий (ctrl + /)**

```javascript
{
	/*<h2>{props.name}</h2>*/
}
```

---

```javascript
const App = () => {
	return <Books name='vue'> 123 </Books>
}
```

** для обращения к информации в теге вызова функции Books - {props.children}**

---

---

---

**разделили index.js на компоненты**

**Books.jsx ↓**

```javascript
import React from 'react'

const Books = props => {
	return (
		<div>
			<h2>{props.name ? props.name : 'default book'}</h2>
			<p>Книга : {props.year} года</p>
			<p>{props.price}</p>
		</div>
	)
}

export {Books}
```

---

**import React from 'react'** - _Подключаем библиотеку react_

**export {Books}** - _экспортируем нашу функцию , чтобы ее можно было вызвать в другом компоненте_

---

**App.jsx ↓**

```javascript
import React from 'react'
import {Books} from './Books'

const App = () => {
	return (
		<div>
			<Books name='Vue' year='2010' price='1111' />
			<Books name='Angular' year='2015' price='2222' />
			<Books name='React' year='2020' price='3333' />
		</div>
	)
}
export default App
```

---

**import {Books} from './Books'** - _получаем экспортированныый компонент, чтобы передать в него параметры и получить jsx код в ответ_

**export default App** - _экспортируем главный App чтобы вывести его в index.jsx или js_

---

**index.jsx ↓**

```javascript
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
)
```

---

**import App from './App.jsx'** - _Подключаем компаненты App.jsx_

**ReactDOM.render** - _Вызов_

---

**Условная отрисовка**

**Если не приходит props.name , то не отрисуй ничего if(!props.name)**
_если при вызове функции не передали name , то функция вернет null => ничего не отрисует_ **↓**

```javascript
import React from 'react'

const Books = props => {
	if (!props.name) {
		return null
	}

	return (
		<div>
			<h2>{props.name ? props.name : 'default book'}</h2>
			<p>Книга : {props.year} года</p>
			<p>{props.price}</p>
		</div>
	)
}

export {Books}
```

**Использование тернарного оператора ↓**

```javascript
import React from 'react'

const Books = props => {
	return props.name ? (
		<div>
			<h2>{props.name ? props.name : 'default book'}</h2>
			<p>Книга : {props.year} года</p>
			<p>{props.price}</p>
		</div>
	) : null
}

export {Books}
```
