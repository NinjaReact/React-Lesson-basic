#Таймер

```JavaScript
class App extends Component {
    state ={
        count: 0,
        isCounting : false
    }


    handleStart = () =>{
        this.setState({isCounting : true})
        this.timerId = setInterval(()=> {
                this.setState({count : this.state.count + 1})
        } , 1000)
    }

    handleStop = () =>{
        this.setState({isCounting : false})
        clearInterval(this.timerId)
    }

    hendleReset= ()=>{
        this.setState({count : 0 , isCounting : false})
        clearInterval(this.timerId)
    }

    componentDidMount(){
        const userCount = localStorage.getItem('timer')
        if(userCount) {
            this.setState({count : +userCount})
        }
    }

    componentDidUpdate(){
        localStorage.setItem('timer' , this.state.count)
    }

    componentDidUnmount(){
        clearInterval(this.timerId)
    }
    render(){
        return(
            <div className='timer'>
                <h3>React Timer</h3>
                <h1>{this.state.count}</h1>
                {!this.state.isCounting ? (
                    <button onClick={this.handleStart}>Start</button>
                ) : (
                    <button onClick={this.handleStop}>Stop</button>
                )}
                <button onClick={this.hendleReset}>Reset</button>
            </div>
        )
    }
}
```

---

**Подготовка ↓**

```JavaScript
    state ={
        count: 0,
        isCounting : false
    }
```

**count** - счеитчик , значение которого я мини-приложения
**isCounting** - Состояние кнопки Start/Stop

---

---

**Кнопка Старт ↓**

```JavaScript
    handleStart = () =>{
        this.setState({isCounting : true})
        this.timerId = setInterval(()=> {
                this.setState({count : this.state.count + 1})
        } , 1000)
    }
```

**Изменение кнопки Start/Stop(Кнопка перешла в состояние STOP) ↓**

```JavaScript
    this.setState({isCounting : true})
```

**Запуск setInterval для того чтобы он прибовлял к нашему count +1 каждую секунду ↓**

```JavaScript
        this.timerId = setInterval(()=> {
                this.setState({count : this.state.count + 1})
        } , 1000)
```

---

**Кнопка Stop ↓**

```JavaScript
    handleStop = () =>{
        this.setState({isCounting : false})
        clearInterval(this.timerId)
    }
```

**Меняет состояние кнопки Start/Stop (Кнопка переходит в положение Start) ↓**

```JavaScript
    his.setState({isCounting : false})
```

**Остановление интервала , чтобы таймер освободился ↓**

```JavaScript
    clearInterval(this.timerId)
```

---

**Кнопка Reaset , останавливает таймер и обнуляет его ↓**

```JavaScript
    hendleReset= ()=>{
        this.setState({count : 0 , isCounting : false})
        clearInterval(this.timerId)
    }
```

**Обнуление count и изменение Кнопки Start/Stop(кнопка в состоянии Start) ↓**

```JavaScript
    this.setState({count : 0 , isCounting : false})
```

**Остановление интервала , чтобы таймер освободился ↓**

```JavaScript
    clearInterval(this.timerId)
```

---

**componentDidUpdate при изменение состояния count , он записывает в localStorage значение count к ключу timer ↓**

```JavaScript
    componentDidUpdate(){
        localStorage.setItem('timer' , this.state.count)
    }
```

**componentDidMount при первом монтирование компонента , записывает значения ключа timer в usesrCount**
_if(userCount) his.setState({count : +userCount}) - если userCount не пустой , то присвой его знаечние count_

```JavaScript
    componentDidMount(){
        const userCount = localStorage.getItem('timer')
        if(userCount) {
            this.setState({count : +userCount})
        }
    }
```

---

**componentDidUnmount - когда отрабатывает компонент (к примеру закрытие вкладки) останавливает таймер ↓**

```JavaScript
    componentDidUnmount(){
        clearInterval(this.timerId)
    }
```

---

**render app.js ↓**

```JavaScript
    render(){
        return(
            <div className='timer'>
                <h3>React Timer</h3>
                <h1>{this.state.count}</h1>
                {!this.state.isCounting ? (
                    <button onClick={this.handleStart}>Start</button>
                ) : (
                    <button onClick={this.handleStop}>Stop</button>
                )}
                <button onClick={this.hendleReset}>Reset</button>
            </div>
        )
    }
```

**Тернарный оператор для изменения состояния кнопки Stop/Start**

```JavaScript
    {!this.state.isCounting ? (
        <button onClick={this.handleStart}>Start</button>
   ) : (
         <button onClick={this.handleStop}>Stop</button>
        )}
```
