# Hello second lesson for React

```javascript
const App = () => {
	return React.createElement('h1', {id: 'hello', className: 'class1'}, 'Hello React')
}
```

Функция App возвращает :
React.createElement(

- название тега (h1)
- Объект с className и id ({id: 'hello', className: 'class1'})
- Массив дочерних элементов [
  ...React.createElement('h2' , {} , props.name),
  ...React.createElement('p' , {} , props.year),
  ...React.createElement('p' , {} , props.price)
  ]
  ) в нашем случае текстовый тег , вместо массива указывается текст этого h1('Hello React')

---

Для выводы нашей функции на экран необходима библиотека ReactDOM

ReactDOM.render(Что разворачиваем , куда разворачиваем)

ReactDOM разворачивает функции App в <div id="root"></div>

```javascript
ReactDOM.render(React.createElement(App), document.getElementById('root'))
```
