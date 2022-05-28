import React from 'react'

function Button({text, idn, onClick}) {
  return (
    <div >
      <button 
      id={idn} 
      onClick={onClick}>{text}
      </button>
    </div>
  )
}

export default Button;
