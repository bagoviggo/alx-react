<<<<<<< HEAD
import Footer from './Footer';
import { shallow } from 'enzyme';
import React from 'react';

describe('App', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.exists());
  });
  it("Test text Copyright", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.text().substring(0, 9)).toBe('Copyright');
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
