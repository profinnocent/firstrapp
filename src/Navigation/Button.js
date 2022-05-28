import React from 'react'
import './Button.css';

function Button({text, idn, onclick}) {

  return (
    <div >
      <button 
      id={idn} 
      onClick={onclick}>{text}
      </button>
    </div>
  )
}

export default Button
