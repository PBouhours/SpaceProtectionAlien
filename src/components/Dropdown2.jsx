import React, { useState } from 'react';

function Dropdown2(props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='Dropdown'>
      <button
        onClick={(e) => {
          setIsOpen(!isOpen);
        }}
      >
        Espèce
      </button>
      <div className={isOpen ? 'dropdown-group active' : 'dropdown-group'}>
        {props.children}
      </div>
    </div>
  );
}

export default Dropdown2;
