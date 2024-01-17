<<<<<<< HEAD
export function getFullYear() {
  let today = new Date();
  return today.getFullYear();
}

export function getFooterCopy(isIndex) {
  if (isIndex === true) {
    return "Holberton School";
  } else {
    return "Holberton School main dashboard";
  }
}

export function getLatestNotification() {
  return  '<strong>Urgent requirement</strong> - complete by EOD';
}

=======
const getFullYear = () => {
  let current_year = new Date().getFullYear();
  return current_year;
}

const getFooterCopy = (isIndex) => {
  if (isIndex === true) {
    return "Holberton School";
  } else {
    return "Holberton School main dashboard";
  }
}

const getLatestNotification = () => {
  return "<strong>Urgent requirement</strong> - complete by EOD";
}

module.exports = {
  getFooterCopy,
  getFullYear,
  getLatestNotification
};
>>>>>>> 9df65442affb375a2f010c84da93423049944638
