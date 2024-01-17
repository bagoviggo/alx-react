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
  });
});
>>>>>>> 9df65442affb375a2f010c84da93423049944638
