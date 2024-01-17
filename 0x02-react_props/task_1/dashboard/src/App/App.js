<<<<<<< HEAD
import React from 'react';
import './App.css';
import { getFullYear, getFooterCopy } from '../utils/utils';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Notifications from '../Notifications/Notifications';

const year = getFullYear();
const getFooter = getFooterCopy(false);

export default function App() {
    return (
        <React.Fragment>
            <Notifications />
            <Header />
            <Login />
            <Footer />
        </React.Fragment>
    );
}

  
=======
import React from "react";
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <Notifications />
      <div className="App">
        <Header />
        <Login />
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
>>>>>>> 9df65442affb375a2f010c84da93423049944638
