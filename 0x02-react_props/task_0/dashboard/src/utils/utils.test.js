<<<<<<< HEAD
import { getFullYear, getFooterCopy, getLatestNotification } from './utils'

test('Check that the function returns the correct year', () => {
    const year = getFullYear();
    expect(year).toEqual(2023)
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
import { getFullYear, getFooterCopy, getLatestNotification } from "./utils";

test("returns current year", () => {
  expect(getFullYear()).toBe(2022);
});

test("correct footer copy", () => {
  expect(getFooterCopy(true)).toBe("Holberton School");
  expect(getFooterCopy(false)).toBe("Holberton School main dashboard");
});

test("returns right notification", () => {
  expect(getLatestNotification()).toBe("<strong>Urgent requirement</strong> - complete by EOD");
});
>>>>>>> 9df65442affb375a2f010c84da93423049944638
