import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

const iSloading = false;

ReactDOM.render(
	<React.StrictMode>
		<App iSloading={iSloading}/>
	</React.StrictMode>,
	document.getElementById('root')
)


