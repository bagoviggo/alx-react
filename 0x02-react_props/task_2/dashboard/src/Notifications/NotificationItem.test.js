<<<<<<< HEAD
import NotificationItem from "./NotificationItem";
import { shallow } from 'enzyme';
import React from 'react';

describe('NotificationItem', () => {
    it('Basic renderin of the component', () => {
      const wrapper = shallow(<NotificationItem />);
      expect(wrapper.exists());
    });
    it("Verify type and value", () => {
      const wrapper = shallow(<NotificationItem data-priority='default' value='test'/>);
      expect(wrapper.containsMatchingElement(<li data-priority='default'>test</li>)).toEqual(true);
    });
    it('Verify html', () => {
      const wrapper = shallow(<NotificationItem dangerouslySetInnerHTML={{__html: '<u>test</u>'}}/>);
      expect(wrapper.html()).toEqual('<li><u>test</u></li>');
    });
  });
=======
import React from "react";
import NotificationItem from "./NotificationItem";
import { shallow } from "enzyme";

describe("rendering components", () => {
  it("renders NotificationItem component without crashing", () => {
    const wrapper = shallow(<NotificationItem />);

    expect(wrapper.exists()).toBe(true);
  });

  it('renders correct html from type="default" value="test" props', () => {
    const wrapper = shallow(<NotificationItem />);

    wrapper.setProps({ type: "default", value: "test" });
    expect(wrapper.html()).toEqual('<li data-notification-type="default">test</li>');
  });

  it('renders correct html from  html="<u>test</u>" props', () => {
    const wrapper = shallow(<NotificationItem />);

    wrapper.setProps({ html: "<u>test</u>" });
    expect(wrapper.html()).toEqual('<li data-urgent="true"><u>test</u></li>');
  });
});
>>>>>>> 9df65442affb375a2f010c84da93423049944638
