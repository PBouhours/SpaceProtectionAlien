import React, { useState } from 'react';
import DropdownItem from './DropdownItem';

function Dropdown(props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='Dropdown'>
      <button
        onClick={(e) => {
          setIsOpen(!isOpen);
        }}
      >
        Genre
      </button>
      <div className={isOpen ? 'dropdown-group active' : 'dropdown-group'}>
        {props.children}
      </div>
    </div>
  );
}

export default Dropdown;
