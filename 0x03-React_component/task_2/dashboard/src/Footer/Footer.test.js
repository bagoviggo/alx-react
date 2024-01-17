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
  });
});
>>>>>>> 9df65442affb375a2f010c84da93423049944638
