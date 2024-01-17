<<<<<<< HEAD
import Login from './Login';
import { shallow } from 'enzyme';
import React from 'react';

describe('App', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.exists());
  });
  it("Test n°3", () => {
    const wrapper = shallow(<Login />);
    wrapper.update();
    expect(wrapper.find("div.App-body")).toHaveLength(1);
  });
  it("Verify that the components renders 2 input", () => {
    const wrapper = shallow(<Login />);
    wrapper.update();
    expect(wrapper.find("input")).toHaveLength(2);
  });
  it("Verify that the components renders 2 input", () => {
    const wrapper = shallow(<Login />);
    wrapper.update();
    expect(wrapper.find("label")).toHaveLength(2);
  });
});
=======
import { shallow } from "enzyme";
import React from "react";
import Login from "./Login";

describe("Header", () => {
  it("should render without crashing", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.exists()).toEqual(true);
  });
  it("should have 2 input tags and 2 label tags", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find("label")).toHaveLength(2);
    expect(wrapper.find("input")).toHaveLength(2);
  });
});
>>>>>>> 9df65442affb375a2f010c84da93423049944638
