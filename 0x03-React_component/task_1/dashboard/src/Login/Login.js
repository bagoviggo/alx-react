<<<<<<< HEAD
import React from 'react';
import './Login.css';
import { getFullYear, getFooterCopy } from '../utils/utils';

const year = getFullYear();
const getFooter = getFooterCopy(false);

export default function App() {
    return (
        <div>
            <div className="App-body">
                <p>Login to access the full dashboard</p>
                <label htmlFor="Email">Email: </label>
                <input type="email" id="Email" name="Email"/>
                <label htmlFor="Password"> Password: </label>
                <input type="password" id="Password" name="Password"/>
                <button>Ok</button>
            </div>
            <div className="linea"></div>
        </div>
    );
}
  
=======
import React from 'react';
import './Login.css';

function Login() {
  return (
    <React.Fragment>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <label htmlFor="email">Email: </label>
        <input type="email" id="email" name="email" />
        <label htmlFor="password">Password: </label>
        <input type="password" id="password" name="password" />
        <button>OK</button>
      </div>
    </React.Fragment>
  )
}

export default Login;
>>>>>>> 9df65442affb375a2f010c84da93423049944638
