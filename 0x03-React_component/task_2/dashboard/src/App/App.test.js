<<<<<<< HEAD
import App from './App';
import { shallow } from 'enzyme';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';

describe('App', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists());
  });
  it('Notifications component', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists());
  });
  it('Header component', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists());
  });
  it('Login component', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.exists());
  });
  it('Footer component', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.exists());
  });
});
=======
import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('Test App.js', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('Renders App without crashing', () => {
    expect(wrapper.exists());
  });

  it('App component contains Notifications component', () => {
    expect(wrapper.find("Notifications")).toHaveLength(1);
  });

  it('App component contains Header component', () => {
    expect(wrapper.find("Header")).toHaveLength(1);
  });

  it('App component contains Login component', () => {
    expect(wrapper.find("Login")).toHaveLength(1);
  });

  it('App component contains Footer component', () => {
    expect(wrapper.find("Footer")).toHaveLength(1);
  });

  it('test to check that CourseList is not displayed inside App', () => {
    expect(wrapper.find("CourseList")).toHaveLength(0);
  });
});

describe("Testing <App isLoggedIn={true} />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App isLoggedIn={true}/>);
  });

  it("the Login component is not included", () => {
    expect(wrapper.find('Login')).toHaveLength(0);
  });

  it(" the CourseList component is included", () => {
    expect(wrapper.find('CourseList').exists());
  });
});
>>>>>>> 9df65442affb375a2f010c84da93423049944638
