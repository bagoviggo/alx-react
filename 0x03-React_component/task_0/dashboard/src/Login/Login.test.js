<<<<<<< HEAD
import App from './App';
import { shallow } from 'enzyme';
import logo from '../assets/holberton-logo.jpg';

describe('App', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists());
  });
  it("Test n°2", () => {
    const wrapper = shallow(<App />);
    wrapper.update();
    expect(wrapper.find("div.App-header")).toHaveLength(0);
  });
  it("Test n°3", () => {
    const wrapper = shallow(<App />);
    wrapper.update();
    expect(wrapper.find("div.App-body")).toHaveLength(1);
  });
  it("Test n°4", () => {
    const wrapper = shallow(<App />);
    wrapper.update();
    expect(wrapper.find("div.App-footer")).toHaveLength(0);
=======
import React from 'react';
import Login from './Login';
import { shallow } from 'enzyme';

describe("testing the <Login /> component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Login />);
  });

  it("Login component renders without crashing", () => {
    expect(wrapper).toBeDefined();
  });

  it("Login component renders 2 input tags", () => {
    expect(wrapper.find("input")).toHaveLength(2);
  });

  it("Login component renders 2 label tags", () => {
    expect(wrapper.find("label")).toHaveLength(2);
>>>>>>> 9df65442affb375a2f010c84da93423049944638
  });
});
