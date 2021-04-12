import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const Books = props =>{
  return (
    <div>
      <h2>{props.name ? props.name : 'default book'}</h2>
      <p>Книга : {props.year} года</p>
      <p>{props.price}</p>
    </div>
  )
}

const Apps = () =>{
  return (
    <div>
      <Books name='Vue' year='2010' price='1111'/>
      <Books name='Angular' year='2015' price='2222'/>
      <Books name='React' year='2020' price='3333'/>
    </div>
  )
}
ReactDOM.render(React.createElement(Apps) , document.getElementById('root'))

reportWebVitals();
