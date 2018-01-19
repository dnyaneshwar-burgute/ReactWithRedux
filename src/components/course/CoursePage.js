import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
class CoursePage extends React.Component {
  constructor(){
    super();
    this.state = {
      course: {title: ""}
    };
    this.onSaveClick = this.onSaveClick.bind(this);
    this.onTitleChange = this.onTitleChange.bind(this);
  }
  onTitleChange(event){
    event.preventDefault();
    this.setState({course: {title: event.target.value}});
  }

  onSaveClick(event){
    event.preventDefault();
    this.props.actions.createCourse(this.state.course);
  }

  courseRow(course, index){
    return <div key={index}>{course.title}</div>;
  }

  render(){
    return(
      <div>
        <h1>Course</h1>
        {this.props.courses.map(this.courseRow)}
        <h1>Add Course</h1>
        <input type="text"
          value={this.state.course.title}
          onChange={this.onTitleChange}/>

        <input type="submit"
               value="Save"
               onClick={this.onSaveClick}/>
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
