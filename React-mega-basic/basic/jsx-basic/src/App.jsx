import React from 'react'
import {Books} from './Books'

const App = () => {
	return (
		<div>
			<Books name='Vue' year='2010' price='1111' />
			<Books name='Angular' year='2015' price='2222' />
			<Books name='React' year='2020' price='3333' />
		</div>
	)
}
export default App
