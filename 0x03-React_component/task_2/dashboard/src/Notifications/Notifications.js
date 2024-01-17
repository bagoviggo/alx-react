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
import React from 'react';
import './Notifications.css';
import { getLatestNotification } from '../utils/utils';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import PropeTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';

class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    return (
      <>
        <div className='menuItem'>
          Your notifications
        </div>
        {this.props.displayDrawer? 
            <div className="Notifications">
              <button style={{
                color: '#3a3a3a',
                fontWeight: 'bold',
                background: 'none',
                border: 'none',
                fontSize: '15px',
                position: 'absolute',
                right: '3px',
                top: '3px',
                cursor: 'pointer',
                outline: 'none',
              }}
              aria-label="Close"
              onClick={(e) => {
                console.log('Close button has been clicked');
              }}
              >
                <img src={closeIcon} alt="close icon" width="15px" />
              </button>
              {
                this.props.listNotifications.length != 0 ?
                  <p>Here is the list of notifications</p>
                : null
              }
              <ul>
                {
                  this.props.listNotifications.length == 0 ?
                    <NotificationItem type="default" value="No new notification for now" />
                  : null
                }
                {
                  this.props.listNotifications.map((val, idx)=> {
                    return <NotificationItem
                    type={val.type}
                    value={val.value}
                    html={val.html}
                    key={val.id}
                    markAsRead={this.markAsRead}
                    id={val.id}
                  />
                  })
                }
              </ul>
            </div>
          :
            null
        }
        
      </>
    );
  }
}

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: []
};

Notifications.propTypes = {
  displayDrawer: PropeTypes.bool,
  listNotifications: PropeTypes.arrayOf(NotificationItemShape)
};

export default Notifications;
>>>>>>> 9df65442affb375a2f010c84da93423049944638
