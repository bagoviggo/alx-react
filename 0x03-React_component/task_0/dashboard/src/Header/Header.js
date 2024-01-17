import React from 'react';
<<<<<<< HEAD
import logo from '../assets/holberton-logo.jpg';
import './Header.css';
import { getFullYear, getFooterCopy } from '../utils/utils';

const year = getFullYear();
const getFooter = getFooterCopy(false);

export default function App() {
    return (
        <div>
            <header className="App-header">
                <img src={logo} alt="logo"></img>
                <h1>School dashboard</h1>
            </header>
            <div className="linea"></div>
        </div>
    );
}
  
=======
import logo from '../assets/holberton_logo.jpg';
import './Header.css';

function Header() {
  return (
    <div className="App-header">
      <img src={logo} alt="logo" />
      <h1>School dashboard</h1>
    </div>
  )
}

export default Header;
>>>>>>> 9df65442affb375a2f010c84da93423049944638
