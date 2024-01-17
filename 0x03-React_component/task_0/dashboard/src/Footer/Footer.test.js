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
import { shallow } from 'enzyme';
import Footer from './Footer';

describe("Testing <Footer /> component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Footer />);
  });

  it("Footer Component renders without crashing", () => {
    expect(wrapper.exists());
  });

  it("Footer compoenent render at the very least the text “Copyright”", () => {
    expect(wrapper.find("Copyright").at(0)).toBeDefined();
>>>>>>> 9df65442affb375a2f010c84da93423049944638
  });
});
