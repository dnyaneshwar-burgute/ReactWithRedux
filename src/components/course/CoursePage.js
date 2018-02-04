import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';
import {browserHistory} from 'react-router';
class CoursePage extends React.Component {
  constructor(){
    super();
    this.state = {
      course: {title: ""}
    };
    this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
    // this.onSaveClick = this.onSaveClick.bind(this);
    // this.onTitleChange = this.onTitleChange.bind(this);
  }
  // onTitleChange(event){
  //   event.preventDefault();
  //   this.setState({course: {title: event.target.value}});
  // }

  // onSaveClick(event){
  //   event.preventDefault();
  //   this.props.actions.createCourse(this.state.course);
  // }
  redirectToAddCoursePage() {
    browserHistory.push('/course');
  } 

  courseRow(course, index){
    return <div key={index}>{course.title}</div>;
  }

  render(){
    const {courses} = this.props;
    return(
      <div>
        <h1>Course</h1>
        <input
          type="submit"
          value="Add New Course"
          className="btn btn-primary"
          onClick={this.redirectToAddCoursePage}/>
        <CourseList courses={courses}/>
      </div>
    );
  }
}

CoursePage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses
  };
}

function mapDispatchToProps(dispatch) {
  return {
    //createCourse: course => dispatch(courseActions.createCourse(course))
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursePage);
