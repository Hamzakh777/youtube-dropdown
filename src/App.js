import React, { useState } from 'react';
import './index.css';
import { ReactComponent as BellIcon } from './icons/bell.svg';
import { ReactComponent as MessengerIcon } from './icons/messenger.svg';
import { ReactComponent as CaretIcon } from './icons/caret.svg';
import { ReactComponent as PlusIcon } from './icons/plus.svg';
import { ReactComponent as CogIcon } from './icons/cog.svg';
import { ReactComponent as ChevronIcon } from './icons/chevron.svg';
import { ReactComponent as ArrowIcon } from './icons/arrow.svg';
import { ReactComponent as BoltIcon } from './icons/bolt.svg';

function App() {
  return (
    <Navbar>
      <NavItem icon={<PlusIcon />} />
      <NavItem icon={<BellIcon />} />
      <NavItem icon={<MessengerIcon />} />

      <NavItem icon={<CaretIcon />} >
        {/* dropdown goes here  */}
        <DropdownMenu />
      </NavItem>
    </Navbar>
  );
}

function Navbar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav"> {props.children}</ul>
    </nav>
  );
}

function DropdownMenu() {

  function DropdownItem(props) {
    return (
      <div className="menu-item">
        <span className="icon-button">{ props.leftIcon }</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </div>
    );
  }

  return (
   <div className="dropdown">
      <DropdownItem
      >
        My profile
      </DropdownItem>
      <DropdownItem
        leftIcon={<CogIcon />}
        rightIcon={<ChevronIcon />} 
      >

      </DropdownItem>
    </div>
  );
}

function NavItem(props) {
  const [open, setOpen] = useState();

  return (
    <li className="nav-item">
      <div href="#" className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </div>
      {open && props.children}
    </li>
  );
}


export default App;
