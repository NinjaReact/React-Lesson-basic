#Коллекции и атрибуты (без создания отдельного компонента)

**Стей с массивом объектов ↓**

```JavaScript
    state ={
        posts:[
            {id:'abc1' , name: 'Js Basic'},
            {id:'abc2' , name: 'Js Afvanced'},
            {id:'abc3' , name: 'React JS'},
        ]
    }
```

---

**Худший вариант вывода этих объектов ↓**

```JavaScript
    render(){
        return (
            <div className='App'>
                {this.state.posts.map((post) =>(
                    <h2>{post.name}</h2>
                ))}
            </div>
        )
    }
```

---

**React требует к каждому сгенерированному объекту уникальный key**
_Им может быть как name , id , индекс элемента в массиве_

**В метод map мы передаем index элемента массива и передаем его в key ↓**

```JavaScript
    render(){
        return (
            <div className='App'>
                {this.state.posts.map((post , index) =>(
                    <h2 key={index}>{post.name}</h2>
                ))}
            </div>
        )
    }
```

---

**React не рекомендует работь с индексами и советует выбирать что то более строгое (строка которая есть в объекте)**
**post.name или post.id**

```JavaScript
    render(){
        return (
            <div className='App'>
                {this.state.posts.map((post) =>(
                    <h2 key={post.id}>{post.name}</h2>
                ))}
            </div>
        )
    }
```
