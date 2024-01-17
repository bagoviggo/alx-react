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
