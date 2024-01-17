<<<<<<< HEAD
import React from 'react';

const li = <li type="data-notification-type" value="" dangerouslySetInnerHTML={{__html: html}}></li>


=======
import React from "react";
import "./Notifications.css";

function NotificationItem({ type, html, value }) {
  return (
    <>
      {type && value ? <li data-notification-type={type}>{value}</li> : null}
      {html ? <li data-urgent dangerouslySetInnerHTML={{ __html: html }}></li> : null}
    </>
  );
}

export default NotificationItem;
>>>>>>> 9df65442affb375a2f010c84da93423049944638
