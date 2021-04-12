import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

const Books = props => {
	return (
		<div className='BOOK'>
			<h2>{props.name}</h2>
			<p>{props.year}</p>
			<p>{props.price}</p>
		</div>
	)
}

const Apps = () => {
	return (
		<div className='BOOKS FOR JS'>
			<Books name='React' year='2010' price='1200' />
			<Books name='Vue' year='2015' price='1500' />
			<Books name='Angular' year='2017' price='1700' />
		</div>
	)
}

ReactDOM.render(React.createElement(Apps), document.getElementById('root'))

reportWebVitals()
