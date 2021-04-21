# Валидация

**2 инпута как и в прошлой ветке **

```javaScript
import React , {Component} from 'react'

class Form extends Component {
    state = {
        firstname : '',
        email : ''
    }

    handleChangeInput = (event) =>{
        this.setState({[event.target.name] : event.target.value})
    }

    validateName = () => {
        if(this.state.firstname.length < 5){
            alert('Не валидное имя ,минимум 7 символов')
        }
    }

    validateEmail = () => {
        if(!(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.state.email))){
            alert('bad email')
        }
    }

    render() {
        const {firstname , email} = this.state
        return <div>
            <input
                type="text"
                name='firstname'
                placeholder='firstname'
                value={firstname}
                onChange={this.handleChangeInput}
                onBlur={this.validateName}
            />
            <input
                type="text"
                name='email'
                placeholder='email'
                value={email}
                onChange={this.handleChangeInput}
                onBlur={this.validateEmail}
            />
        </div>
    }

}

export  {Form}
```

---

```javaScript
    validateName = () => {
        if(this.state.firstname.length < 5){
            alert('Не валидное имя ,минимум 7 символов')
        }
    }
```

**onBlur={this.validateName}** - на инпут с name добавили обработчик onBlur который сравнивает значение длинны строки в стейте
**(onChange - заносит данные в state)**

---

**Валидация email ↓**

```javaScript
    validateEmail = () => {
        if(!(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.state.email))){
            alert('bad email')
        }
    }
```
