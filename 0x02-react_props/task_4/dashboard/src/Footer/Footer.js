<<<<<<< HEAD
import React from 'react';
import './Footer.css';
import { getFullYear, getFooterCopy } from '../utils/utils';

const year = getFullYear();
const getFooter = getFooterCopy(false);

export default function Footer() {
    return (
        <div>
            <footer className="App-footer">
                <p>Copyright {year} - {getFooter}</p>
            </footer>
        </div>
    );
}
  
=======
import React from "react";
import "./Footer.css";
import { getFullYear, getFooterCopy } from "../utils/utils";

function Footer() {
  return (
    <>
      <div className="App-footer">
        Copyright {getFullYear()} - {getFooterCopy()}
      </div>
    </>
  );
}

export default Footer;
>>>>>>> 9df65442affb375a2f010c84da93423049944638
