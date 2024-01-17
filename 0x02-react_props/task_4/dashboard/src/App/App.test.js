<<<<<<< HEAD
import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';

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

describe('App', () => {
  it('CourseList is not displayed', () => {
    const wrapper = shallow(<App />);
    const courseList = wrapper.find(CourseList)
    expect(courseList.length).toEqual(0);
  });
});

const wrapper = shallow(<App isLoggedIn={true}/>);
describe('App', () => {
  it('CourseList is not displayed', () => {
    const courseList = wrapper.find(Login)
    expect(courseList.length).toEqual(0);
  });
  it('CourseList is not displayed', () => {
    const courseList = wrapper.find(CourseList)
    expect(courseList.length).toEqual(1);
  });
});
=======
import React from "react";
import App from "./App";
import Login from "../Login/Login";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Notifications from "../Notifications/Notifications";
import CourseList from "../CourseList/CourseList";
import { shallow } from "enzyme";

describe("App tests", () => {
  it("renders without crashing", () => {
    const component = shallow(<App />);

    expect(component).toBeDefined();
  });
  it("should render Notifications component", () => {
    const component = shallow(<App />);

    expect(component.contains(<Notifications />)).toBe(true);
  });
  it("should render Header component", () => {
    const component = shallow(<App />);

    expect(component.contains(<Header />)).toBe(true);
  });
  it("should render Login Component", () => {
    const component = shallow(<App />);

    expect(component.contains(<Login />)).toBe(false);
  });
  it("should render Footer component", () => {
    const component = shallow(<App />);

    expect(component.contains(<Footer />)).toBe(true);
  });
  it("does not render courselist if logged out", () => {
    const component = shallow(<App />);

    component.setProps({ isLoggedIn: false });

    expect(component.contains(<CourseList />)).toBe(true);
  });
  it("renders courselist if logged in", () => {
    const component = shallow(<App isLoggedIn={true} />);

    expect(component.contains(<CourseList />)).toBe(true);
    expect(component.contains(<Login />)).toBe(false);
  });
});
>>>>>>> 9df65442affb375a2f010c84da93423049944638
