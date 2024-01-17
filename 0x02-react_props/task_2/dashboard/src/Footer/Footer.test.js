<<<<<<< HEAD
import Footer from './Footer';
import { shallow } from 'enzyme';

describe('App', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.exists());
  });
  it("Test n°4", () => {
    const wrapper = shallow(<Footer />);
    wrapper.update();
    expect(wrapper.find("div.App-footer")).toHaveLength(0);
  });
  it("Test n°4", () => {
    const wrapper = render(<Footer />);
    expect(getByText("Copyright")).toHaveLength(0);
  });
});
=======
import { shallow } from "enzyme";
import React from "react";
import Footer from "./Footer";
import { getFullYear, getFooterCopy } from "../utils/utils";

describe("Footer test", () => {
  it("should render without crashing", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.exists()).toEqual(true);
  });
  it("should render the text Copyright", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.text()).toEqual(`Copyright ${getFullYear()} - ${getFooterCopy()}`);
  });
});
>>>>>>> 9df65442affb375a2f010c84da93423049944638
