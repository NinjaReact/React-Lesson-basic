# Hello second lesson for React

```javascript
        const Book  = () =>{
             return React.createElement('div' ,{className : 'Books'} , [
                 React.createElement('h2' , {} , 'Js for beginner'),
                 React.createElement('p' , {} , 2010) ,
                 React.createElement('p' , {} , '900 rub') ,
             ])
        }
}
```

Функция Book возвращает :
React.createElement(

- название тега (div)
- Объект с className и id ('div' ,{className : 'Books')
- Массив дочерних элементов [
  - React.createElement('h2' , {} , 'Js for beginner'),
  - React.createElement('p' , {} , 2010) ,
  - React.createElement('p' , {} , '900 rub') ,
    ]
    )

---

ReactDOM.render может развернуть только 1 функцию

чтобы вывести 2 функции , нужно вызвать функции в теле другой функции

```javascript
const App = () => {
	return React.createElement('div', {className: 'AllApp'}, [
		React.createElement('h2', {id: 'app', className: 'app'}, 'Приложение с книгами ниже'),

		React.createElement(Book), //вызываем нашу функцию
	])
}

ReactDOM.render(React.createElement(App), document.getElementById('root'))
```

---

**Как присваивать значения функции books ?**

Вызываем функцию books в фунции App ↓

```javascript
React.createElement(Books, {name: 'Vue', year: 2015, price: 2020}),
```

функция **Books** принимает _props_ ↓ (props.name , props.year , props.price)

```javascript
const Books = props => {
	return React.createElement('div', {className: 'Books for object'}, [
		React.createElement('h2', {}, props.name),
		React.createElement('p', {}, props.year),
		React.createElement('p', {}, props.price),
	])
}
```

**Весь код вызова ↓**

```javascript
const App = () => {
	return React.createElement('div', {className: 'AllApp'}, [
		React.createElement('h2', {id: 'app', className: 'app'}, 'Приложение с книгами ниже'),

		React.createElement(Books, {name: 'React', year: 2010, price: 1200}),
		React.createElement(Books, {name: 'Vue', year: 2015, price: 2020}),
	])
}

ReactDOM.render(React.createElement(App), document.getElementById('root'))
```
