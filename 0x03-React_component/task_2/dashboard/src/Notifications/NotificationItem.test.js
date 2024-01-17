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
import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe("Testing <NotificationItem />", () => {
  let  wrapper;

  it("<NotificationItem /> renders without crashing", () => {
    wrapper = shallow(<NotificationItem />);
    expect(wrapper.exists());
  });

  it("<NotificationItem />  renders the correct html by passing dummy type and value props,", () => {
    wrapper = shallow(<NotificationItem type="default" value="test" />);
    expect(wrapper.find("li").text()).toBe("test");
    expect(wrapper.find("li").prop("data-notification-type")).toBe("default");
  });

  it("<NotificationItem />  renders the correct html by passing a dummy html prop,", () => {
    wrapper = shallow(<NotificationItem html={{__html:"<u>test</u>"}} />);
    expect(wrapper.find("li").html()).toBe("<li data-notification-type=\"default\"><u>test</u></li>");
  });
});
>>>>>>> 9df65442affb375a2f010c84da93423049944638
