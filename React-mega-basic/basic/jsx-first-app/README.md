# Приложение books на jsx

**Без JSX ↓**

```javascript
const Books = props => {
	return React.createElement('div', {className: 'Books for object'}, [
		React.createElement('h2', {}, props.name),
		React.createElement('p', {}, props.year),
		React.createElement('p', {}, props.price),
	])
}
```

**JSX ↓**

```javascript
const Books = props => {
	return (
		<div className='BOOK'>
			<h2>{props.name}</h2>
			<p>{props.year}</p>
			<p>{props.price}</p>
		</div>
	)
}
```

**JSX** сокращает запись возвращения функции

---

`javascript React.createElement('h2', {}, props.name) == <h2>{props.name}</h2>`

---

Для передачи информации в тег из props , необходимо написать тег и в тело тега внести название поля переданного объекта в {} (<h2>{props.name}</h2>)

---

**Вызов функции books в функции Apps c JSX ↓ ** мы вызываем функцию books в <> , а не пишем React.createElement

```javascript
const Apps = () => {
	return (
		<div className='BOOKS FOR JS'>
			<Books name='Angular' year='2017' price='1700' />
		</div>
	)
}
```

**без JSX ↓**

```javascript
const App = () => {
	return React.createElement('div', {className: 'AllApp'}, [
		React.createElement(Books, {name: 'Angular', year: 2020, price: 1564}),
	])
}
```
