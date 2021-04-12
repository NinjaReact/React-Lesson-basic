# JSX BASIC

**Файл формат js и jsx одно и тоже , просто в формате jsx есть подсказки(легче писать разметку)**

_в тегах можно вставить тернарный оператор если нету props.name , то название книги = 'default book'_

**h2** {props.name ? props.name : 'default book'} **/h2**

_так как это jsx то в тернанорм операторе можно вернуть тег_
**h2** {props.name ? **span**{props.name}**/span** : 'default book'} **/h2**

---

_В теги можно помещать не только переменные , но и текст_
**p** Книга : {props.year} года **/p**

---

**В тагах JSX нету class , используют className**

---

**Для комментарий в JSX необходимо взять теги в {} и внутри них поставить комментарий (ctrl + /)**

```javascript
{
	/*<h2>{props.name}</h2>*/
}
```

---

```javascript
const App = () => {
	return <Books name='vue'> 123 </Books>
}
```

** для обращения к информации в теге вызова функции Books - {props.children}**
