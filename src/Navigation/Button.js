import React from 'react'

function Button({text, idn, onclick}) {

  return (
    <div>
      <button 
      id={idn} 
      onClick={onclick}>{text}
      </button>
    </div>
  )
}

export default Button
