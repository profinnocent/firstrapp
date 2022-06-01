import React from 'react'

function Button({buttontext, buttonid, buttonClick, buttonDclick}) {
  return (
    <div >
      <button 
      id={buttonid} 
      onClick={buttonClick}      
      onDoubleClick={buttonDclick}
      >
        {buttontext || "Button"}
      </button>
    </div>
  )
}

export default Button;
