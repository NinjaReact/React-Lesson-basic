# Неуправялемые компоненты

**не вешаем обработчики для переноса данных стейт , неупровляемые компоненты просто берут данные из стейта**

**Создается ref на каждое поле**

**Ref не ререндрятся**

**не делаем state , а просто создаем ref ↓**

```javascript
class App extends Component {
	constructor() {
		super()

		this.cardRef = React.createRef()
		this.emailRef = React.createRef()
	}
```

---

**Не прописываем Value и обработчики (на input), добавляем ref в input и обрабочик на кнопку или форму для запуска функции валидации(onSubmit={this.handleSubmit}) ↓**

```javascript
	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input type='text' name='card' placeholder='card' ref={this.cardRef} />
				<input type='email' name='email' placeholder='email' ref={this.emailRef} />
				<button>Send</button>
			</form>
		)
	}
}
```

---

**функция валидации ↓**

```javascript
	}
	handleSubmit = event => {
		event.preventDefault()
		if (this.cardRef.current.value.length < 16) {
			alert('Мало')
			return
		}

		this.cardRef.current.value = ''
		this.emailRef.current.value = ''
	}
```
