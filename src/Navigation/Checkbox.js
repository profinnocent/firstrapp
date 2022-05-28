import React from 'react';

function Checkbox({onChange, checked}) {
   return (
    <div>
        <input type="checkbox" id="cbx" 
        onChange={onChange}
        checked={checked}
        />
      
    </div>
  )
}

export default Checkbox;
