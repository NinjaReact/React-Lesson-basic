import React from 'react'

const Books = props =>{
    return (
      <div>
        <h2>{props.name ? props.name : 'default book'}</h2>
        <p>Книга : {props.year} года</p>
        <p>{props.price}</p>
      </div>
    )
  }

export {Books}