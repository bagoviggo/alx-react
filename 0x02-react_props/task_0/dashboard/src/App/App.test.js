<<<<<<< HEAD
import App from './App';
import { shallow } from 'enzyme';
import logo from '../assets/holberton-logo.jpg';

describe('App', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists());
  });
});
=======
import React from "react";
import App from "./App";
import { shallow } from "enzyme";

describe("App tests", () => {
  it("renders without crashing", () => {
    const component = shallow(<App />);

    expect(component).toBeDefined();
  });
  // it('should render a div with the class App-header', () => {
  // 	const component = shallow(<App />);

  // 	expect(component.find('.App-header')).toBeDefined();
  // });
  // it('should render a div with the class App-body', () => {
  // 	const component = shallow(<App />);

  // 	expect(component.find('.App-body')).toBeDefined();
  // });
  // it('should render a div with the class App-footer', () => {
  // 	const component = shallow(<App />);

  // 	expect(component.find('.App-footer')).toBeDefined();
  // });
});
>>>>>>> 9df65442affb375a2f010c84da93423049944638
