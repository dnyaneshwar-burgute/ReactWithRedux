import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';


class ManageCoursePage extends React.Component {
	constructor(props, context){
		super(props, context);
    this.state = {
      course: Object.assign({}, this.props.course),
      errors: {}
    };

    this.updateCourseState = this.updateCourseState.bind(this);
    this.saveCourse = this.saveCourse.bind(this);
	}

  componentWillReceiveProps(nextProps) {
    if (this.props.course.id != nextProps.course.id) {
      // necessory to populate from when existing course is loded directly.
      this.setState({course: Object.assign({}, nextProps.course)});
    }
  }

  updateCourseState(event) {
    const field = event.target.name;
    let course = this.state.course;
    course[field] = event.target.value;
    return this.setState({course: course})
  } 

  saveCourse(event) {
    event.preventDefault();
    this.props.actions.saveCourse(this.state.course);
    this.context.router.push('/courses');
  }

  render(){
    return(
      <CourseForm
        allAuthors={this.props.authors}
        course={this.state.course}
        onChange={this.updateCourseState}
        onSave={this.saveCourse}
        errors={this.state.errors}/>
    );
  }
}

ManageCoursePage.propTypes = {
  course: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

ManageCoursePage.contextTypes = {
  router: PropTypes.object  
}

function getCourseById(courses, courseId) {
  const course = courses.filter( course => course.id == courseId);
  if (course) return course[0]; // filter return array need to grab firstName
  return null;
}

function mapStateToProps(state, ownProps) {
  let course = {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''};
  let courseId = ownProps.params.id // from the route course:id
  if (courseId && state.courses.length > 0) {
    course = getCourseById(state.courses, courseId);
  }
  const authorsFormattedForDropdown = state.authors.map(author => {
    return {
      value: author.id,
      text: author.firstName + ' ' + author.lastName 
    };
  });

  return {
    course: course,
    authors: authorsFormattedForDropdown
  };
}

function mapDispatchToProps(dispatch) {
  return {
    //createCourse: course => dispatch(courseActions.createCourse(course))
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);