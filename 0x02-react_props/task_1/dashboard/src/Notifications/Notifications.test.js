<<<<<<< HEAD
import Notifications from './Notifications';
import { shallow } from 'enzyme';

describe('Notifications', () => {
    it('renders without crashing', () => {
      const wrapper = shallow(<Notifications />);
      expect(wrapper.exists());
    });
    it("Test n°2", () => {
      const wrapper = shallow(<Notifications />);
      wrapper.update();
      expect(wrapper.find("li")).toHaveLength(3);
    });
    it("Test n°3", () => {
      const wrapper = shallow(<Notifications />);
      wrapper.update();
      expect(wrapper.find("p").text()).toEqual('Here is the list of notifications');
    });
  });
=======
import React from "react";
import { shallow } from "enzyme";
import Notifications from "./Notifications";

describe("Notification component tests", () => {
  it("renders Notification component without crashing", () => {
    const notification = shallow(<Notifications />);

    expect(notification).toBeDefined();
  });

  it("renders ul", () => {
    const notification = shallow(<Notifications />);

    expect(notification.find("ul")).toBeDefined();
  });

  it("renders three list items", () => {
    const notification = shallow(<Notifications />);

    expect(notification.find("li")).toHaveLength(3);
  });

  it("renders correct text", () => {
    const notification = shallow(<Notifications />);

    expect(notification.find("p").text()).toBe("Here is the list of notifications");
  });
});
>>>>>>> 9df65442affb375a2f010c84da93423049944638
