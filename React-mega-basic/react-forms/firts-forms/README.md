# Формы

```JavaScript
import React from 'react'

class Form extends React.Component {

    state = {
        firstName : ''
    }

    handleChange = (event) =>{
        this.setState({firstName : event.target.value})
    }

    render(){

        const {firstName} = this.state

        return <div>
            <input type="text" name='firstName' placeholder='firstName' value={firstName} onChange={this.handleChange}/>
        </div>
    }
}
export {Form}
```

---

**input :**

- **type="text"** - тип инпута
- **name='firstName'** - Имя инпута
- **placeholder='firstName'** - стартовое значение инпута
- **value={firstName}** - будет записывать в this.state.firstName
- **onChange={this.handleChange}** - функция которая записывает данные в this.state.firstName

**Чтобы состояние формы было контролируемым , вешается обработчик onChange**

---

**Принимаем event event.target.value , меняем значение firstName на value находящееся в input**

```JavaScript
    handleChange = (event) =>{
        this.setState({firstName : event.target.value})
    }

```

---

**что делать если несколько форм ? писить несколько функций ?**

**name в input равен назаванию поля в state**

```JavaScript
    handleChange = (event) =>{
        this.setState({[event.target.name] : event.target.value})
    }

```

---

**весь код**

```JavaScript
import React from 'react'

class Form extends React.Component {

    state = {
        firstName : '',
        email : ''
    }

    handleChange = (event) =>{
        this.setState({[event.target.name] : event.target.value})
    }

    render(){

        const {firstName , email} = this.state

        return <div>
            <input type="text" name='firstName' placeholder='firstName' value={firstName} onChange={this.handleChange}/>
            <input type="email" name='email' placeholder='email' value={email} onChange={this.handleChange}/>
        </div>
    }
}
export {Form}
```
