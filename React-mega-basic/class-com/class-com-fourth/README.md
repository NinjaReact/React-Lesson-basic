# Жизненный цикл

**componentDidMount** - метод который делает дейсвтие в момент загрузки страницы
_можно делать феч завросы_

```javascript
  componentDidMount(){
    console.log('componentDidMount')
  }
```

---

**componentDidUpdate** - метод который делает дейсвтие в момент активности на странице (клик и тд)

```javascript
  componentDidUpdate(){
    console.log('componentDidUpdate')
  }
```

---

# Пример

**fetch завпрос с постами и комментариями**

```javascript
  state = {
    post : [],
    loading : true,
    comments: []
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(responce => responce.json())
    .then(data => this.setState({post: data , loading : false}))
  }
```

**fetch('https://jsonplaceholder.typicode.com/posts')** - фетч запрос для получения объекта с данными

**.then(responce => responce.json())** - преобразовываем формат json в обычный объектный вид

**.then(data => this.setState({post: data , loading : false}))** - заносит посты в post и меняет значение loading

```javascript
  render(){
    return(
      <div>
        {this.state.loading ? <h3>loading...</h3> :
        <h3>{this.state.post.length} was loaded</h3>}
      </div>
    )
  }
```

## _Если loading : true - будет прелоадер , если нето то покажет сколько постов пришло(100 was loaded)_

**componentDidUpdate при любом взаимодействием с домом или интервалом будет срабатывать этот метод**
_каждые 3 секунды делается запрос_

```javascript
  componentDidUpdate(){
    this.timerId = setInterval(()=> {
      fetch('https://jsonplaceholder.typicode.com/comments')
      .then(responce => responce.json())
      .then(data => this.setState({comments: data }))
    },3000)
  }
```

# Чтобы не было ошибок стоит этот код поместить в componentDidMount()

**так componentDidUpdate каждый раз скдладывает(1 2 3 одновременно работающих скрипта) интервалы при любой итерации**
_componentDidMount просто делает запросы каждые 3сек_

**размонтирование componentWillUnmount() - остановка setInterval**

```javascript
  componentWillUnmount(){
    clearInterval(this.timerId)
    console.log('componentWillUnmount')
  }
```
