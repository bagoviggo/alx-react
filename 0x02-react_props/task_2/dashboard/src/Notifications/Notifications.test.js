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
import { getLatestNotification } from "../utils/utils";
import Notifications from "./Notifications";
import NotificationItem from "./NotificationItem";

describe("Notification tests", () => {
  it("renders Notification component without crashing", () => {
    const component = shallow(<Notifications />);

    expect(component).toBeDefined();
  });

  it("renders correct list items", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find("ul").children()).toHaveLength(3);
    expect(wrapper.find("ul").childAt(0).html()).toEqual('<li data-notification-type="default">New course available</li>');
    expect(wrapper.find("ul").childAt(1).html()).toEqual('<li data-notification-type="urgent">New resume available</li>');
    expect(wrapper.find("ul").childAt(2).html()).toEqual(`<li data-urgent=\"true\">${getLatestNotification()}</li>`);
  });

  it("renders an unordered list", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find("ul").children()).toHaveLength(3);
    wrapper.find("ul").forEach((node) => {
      expect(node.equals(<NotificationItem />));
    });
  });

  it("renders correct text", () => {
    const component = shallow(<Notifications />);

    expect(component.find("p").prop("children")).toBe("Here is the list of notifications");
  });
});
>>>>>>> 9df65442affb375a2f010c84da93423049944638
