import React from 'react';
import './index.css';

function App() {
  return (
    <Navbar>
      <NavItem icon="asdf " />
      <NavItem icon="asdf " />
      <NavItem icon="asdf " />
    </Navbar>
  );
}

function Navbar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav"> { props.children }</ul>
    </nav>
  );
}

function NavItem(props) {
  return (
    <li className="nav-item">
      <div href="#" className="icon-button">
        { props.icon }
      </div>
    </li>
  );
}


export default App;
