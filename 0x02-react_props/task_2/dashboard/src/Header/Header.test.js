<<<<<<< HEAD
import Header from './Header';
import { shallow } from 'enzyme';


describe('App', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists());
  });
  it("Test n°2", () => {
    const wrapper = shallow(<Header />);
    wrapper.update();
    expect(wrapper.find("div.App-header")).toHaveLength(0);
  });
  it('components render img', () => {
    const img = render(<Header />);
    expect(getByText('logo')).toBeInTheDocument();
  });
  it('components render h1', () => {
    const img = render(<Header />);
    expect(getByText('School dashboard')).toBeInTheDocument(1)
  });
});
=======
import React from "react";
import Header from "./Header";
import { shallow } from "enzyme";

describe("Header", () => {
  it("render without crashing", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists()).toEqual(true);
  });
  it("should render a h1", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists("img")).toEqual(true);
    expect(wrapper.containsMatchingElement(<h1>School dashboard</h1>)).toEqual(true);
  });
});
>>>>>>> 9df65442affb375a2f010c84da93423049944638
