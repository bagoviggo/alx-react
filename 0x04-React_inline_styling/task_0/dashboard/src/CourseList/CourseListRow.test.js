import React from "react";
import CourseListRow from "./CourseListRow";
import { shallow } from "enzyme";

describe("Course List Row component test", () => {
  it("should render without crashing", () => {
    const wrapper = shallow(<CourseListRow textFirstCell="test" />);

    expect(wrapper.exists()).toBe(true);
  });

  it("should render one cell with colspan = 2 when textSecondCell is null", () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="test" textSecondCell={null} />);

    expect(wrapper.find("tr").children()).toHaveLength(1);
    expect(wrapper.find("tr").childAt(0).html()).toEqual('<th colSpan="2">test</th>');
  });

  it("should render two cells when textSecondCell is not null", () => {
    const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="test" textSecondCell="test" />);

    expect(wrapper.find("tr").children()).toHaveLength(2);
    expect(wrapper.find("tr").childAt(0).html()).toEqual("<td>test</td>");
    expect(wrapper.find("tr").childAt(1).html()).toEqual("<td>test</td>");
  });

  it("should apply the correct inline style for header row", () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="test" textSecondCell={null} />);
    const expectedStyle = { backgroundColor: "#deb5b545" };

    expect(wrapper.find("tr").prop("style")).toEqual(expectedStyle);
  });

  it("should apply the correct inline style for non-header row", () => {
    const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="test" textSecondCell="test" />);
    const expectedStyle = { backgroundColor: "#f5f5f5ab" };

    expect(wrapper.find("tr").prop("style")).toEqual(expectedStyle);
  });
});
