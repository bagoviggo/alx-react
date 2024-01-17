<<<<<<< HEAD
import React from 'react';
import './Notifications.css';
import { getLatestNotification } from '../utils/utils';
import close from '../assets/close-icon.png';

const styles = { 
        position: 'relative',
        left: '1175px',
        bottom: '70px',
        border: 'none',
        background: 'transparent'
};

function printOnClick() {
    console.log('Close button has been clicked');
}

const notification = getLatestNotification();

export default function Notifications() {
    return (
        <div className="Notifications">
            <p>Here is the list of notifications</p>
            <button style={styles} arial-label="Close" onClick={printOnClick}>
                <img src={close} alt="Close" width="10px"/>
            </button>
            <ul>
                <li data-priority="default">New course available</li>
                <li data-priority="urgent">New resume available</li>
                <li data-priority="urgent" dangerouslySetInnerHTML={{__html: notification}}></li>
            </ul>
        </div>
    );
}
=======
import React from "react";
import "./Notifications.css";
import closeIcon from "../assets/close-icon.png";
import { getLatestNotification } from "../utils/utils";

function Notifications() {
  return (
    <div className="Notifications">
      <button
        style={{ color: "#3a3a3a", fontWeight: "bold", background: "none", border: "none", fontSize: "10px", position: "absolute", right: "2px", top: "2px", cursor: "pointer" }}
        aria-label="Close"
        onClick={console.log("Close button has been clicked")}
      >
        <img src={closeIcon} alt="closeIcon" width="10px" />
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        <li data="default">New course available</li>
        <li data="urgent">New resume available</li>
        <li data="urgent" dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
      </ul>
    </div>
  );
}

export default Notifications;
>>>>>>> 9df65442affb375a2f010c84da93423049944638
