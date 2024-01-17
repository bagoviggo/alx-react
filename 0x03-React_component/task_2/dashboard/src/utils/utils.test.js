<<<<<<< HEAD
import { getFullYear, getFooterCopy, getLatestNotification } from './utils'

test('Check that the function returns the correct year', () => {
    const year = getFullYear();
    expect(year).toEqual(2022)
  });
  
  test('Check that returns the correct string when the argument is true or false', () => {
    let correct = getFooterCopy(true);
    expect(correct).toEqual('Holberton School')
    correct = getFooterCopy(false);
    expect(correct).toEqual('Holberton School main dashboard')
  });
  
  test('Checking the returned string', () => {
    const string = getLatestNotification();
    expect(string).toEqual('<strong>Urgent requirement</strong> - complete by EOD');
  });
=======
import { getFooterCopy, getFullYear, getLatestNotification } from './utils';

describe("Utils functions", () => {
  
  test("getFullYear returns the correct year", () => {
    expect(getFullYear()).toEqual(2023);
  });

  test("getFooterCopy returns the correct string when the argument is true", () => {
    expect(getFooterCopy(true)).toEqual("Holberton School");
  });

  test("getFooterCopy returns the correct string when the argument is false", () => {
    expect(getFooterCopy(false)).toEqual("Holberton School main dashboard");
  });

  test("getLatestNotification returns the expected string", () => {
    expect(getLatestNotification()).toEqual("<strong>Urgent requirement</strong> - complete by EOD");
  });

});
>>>>>>> 9df65442affb375a2f010c84da93423049944638
