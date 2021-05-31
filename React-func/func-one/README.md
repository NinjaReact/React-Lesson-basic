# Функции 

**useState**

**подключаем хук useState из библиотеки react**

```javascript
import React , {useState} from 'react'

function App(){
  const [value , setValue] = useState(0)
  const [value2 , setValue] = useState('')
  return (
    <div className='App'></div>
  )
}

export default App
```

**Создание переменной :**
*const [value , setValue] = useState(0)*
* value - название переменной
* setValue - функция изменения этой переменной 
* useState(0) - принадлежность хуку useState  и 0 в скобках - стартовое значение 
*Если не передать значение то по умолчанию оно будет undefined*

**При вызове фунеции setValue(1) и передать в него значение 1 , то поменяется значение переменной value**

---

**Простой кликер**

```javascript
import React , {useState} from 'react'

function App(){
  const [count , setCount] = useState(0)
  return (
    <div className='App'>
      <button onClick={()=> setCount(count + 1)}>{count}</button>
    </div>
  )
}

export default App
```

---

**Кликер с + и -**

```javascript
import React , {useState} from 'react'

function App(){
  const [count , setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }
  const decrement = () => {
    setCount(count - 1)
  }
  return (
    <div className='App'>
      <button onClick={decrement}> - </button>
      <span>{count}</span>
      <button onClick={increment}> + </button>
    </div>
  )
}

export default App
```

---

**Жизненный цикл**