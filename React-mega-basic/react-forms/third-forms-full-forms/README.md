# Все формы

**State и диструктуризация ↓**

```JavaScript
    state = {
        firstName : '',
        email : '',
        message : '',
        select : '' ,
        substriction : false,
        gender : ''
    }

const {email , firstName , message , select , substriction , gender} = this.state
```

---

**textarea ↓**

```JavaScript
    handleChange = (event) =>{
        this.setState({[event.target.name] : event.target.value})
    }

    <textarea name="message" value={message} onChange={this.handleChange}></textarea>
```

---

**select ↓**

```JavaScript

handleChange = (event) =>{
    this.setState({[event.target.name] : event.target.value})
}

<select name="select" value={select} onChange={this.handleChange}>
    <option value="" disabled></option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
</select>
```

_disabled - пустйо пункт которйы нельзя выбрать_

---

**checkbox ↓**

```JavaScript
state = {
    substriction : false,
}

handleCheckboxChange = (event) =>{
    this.setState({[event.target.name] : event.target.checked})
}

<label >
    <input type="checkbox" name="substriction" checked={substriction} onChange={this.handleCheckboxChange} />
    Substriction
</label>
```

---

**radio**

```JavaScript
state = {
    gender : '',
}

handleChange = (event) =>{
    this.setState({[event.target.name] : event.target.value})
}

    <input type="radio" name="gender" value='male' onChange={this.handleChange} checked={gender === 'male'} /> male
    <input type="radio" name="gender" value='female' onChange={this.handleChange} checked={gender === 'female'} />female
```
