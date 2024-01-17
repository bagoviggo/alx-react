import React from "react";
import "./CourseList.css";
import { StyleSheet, css } from "aphrodite";
import CourseListRow from "./CourseListRow";
import PropTypes from "prop-types";
import CourseShape from "./CourseShape";

const styles = StyleSheet.create({
  courseList: {
    margin: "2em auto",
    width: "80%",
    border: "1px solid #ddd",
    fontSize: "1.2rem",
    marginBottom: "15em",
  },
  tableHeader: {
    borderBottom: "1px solid #ddd",
  },
  tableCell: {
    width: "80%",
  },
  textAlignLeft: {
    textAlign: "left",
  },
});

function CourseList({ listCourses }) {
  return (
    <table className={css(styles.courseList)}>
      <thead>
        <CourseListRow textFirstCell="Available courses" isHeader={true} className={css(styles.tableHeader)} />
        <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} className={css(styles.tableHeader)} />
      </thead>
      <tbody>
        {listCourses.length > 0 ? (
          listCourses.map(({ id, name, credit }) => (
            <CourseListRow
              key={id}
              textFirstCell={name}
              textSecondCell={credit}
              className={css(styles.textAlignLeft, styles.tableCell)}
            />
          ))
        ) : (
          <CourseListRow textFirstCell="No course available yet" />
        )}
      </tbody>
    </table>
  );
}

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape),
};

CourseList.defaultProps = {
  listCourses: [],
};

export default CourseList;
