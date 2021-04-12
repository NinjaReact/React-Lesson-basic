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

** React.createElement('h2', {}, props.name) == <h2>{props.name}</h2>**
