# Создание проекта React

## npx create-react-app .

---

package.json - хранит в себе зависимости

yarn.lock - все зависимости

node_modules - в этой папке все Либы и модули

public - в этой папке находится index.html

src - в этой папочке лежит вся наша программа :

---

---

нужно удалить :

- reportWebVitals.js
- setupTests.js
- App.test.js
- Стили если нужно

_если удаляется файлик , то нужно удалить зависимости с ним_

---

**index.js без личшнего ↓**

```JavaScript
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
)

```

**yarn start** - запуск react app
