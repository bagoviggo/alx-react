import React from 'react';
<<<<<<< HEAD
import logo from '../assets/holberton-logo.jpg';
import './Footer.css';
import { getFullYear, getFooterCopy } from '../utils/utils';

const year = getFullYear();
const getFooter = getFooterCopy(false);

export default function App() {
    return (
        <div>
            <footer className="App-footer">
                <p>Copyright {year} - {getFooter}</p>
            </footer>
        </div>
    );
}
  
=======
import './Footer.css';
import { getFooterCopy, getFullYear } from '../utils/utils';

function Footer() {
  return (
    <div className="App-footer">
      <p>Copyright {getFullYear()} - {getFooterCopy()}</p>
    </div>
  )
}

export default Footer;
>>>>>>> 9df65442affb375a2f010c84da93423049944638
