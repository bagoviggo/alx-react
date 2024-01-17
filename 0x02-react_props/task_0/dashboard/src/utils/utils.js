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
export const getFullYear = () => new Date().getFullYear();

export const getFooterCopy = (isIndex) => (isIndex ? "Holberton School" : "Holberton School main dashboard");

export const getLatestNotification = () => {
  return "<strong>Urgent requirement</strong> - complete by EOD";
};
>>>>>>> 9df65442affb375a2f010c84da93423049944638
