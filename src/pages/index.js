import React, { Component } from 'react';

import { connect } from 'react-redux';

import CourseField from '../components/CourseField';
import CourseList from '../components/CourseList';

import { changeCourseField } from '../store/actions/courseTabList'

class IndexPage extends Component {

    render() {

        const { curField, changeCourseField } = this.props;

        return (
            <div className="page-wrapper">
                <CourseField
                    curField={ curField }
                    changeCourseField={ changeCourseField }
                />
                <CourseList 
                    curField={ curField }
                />
            </div>
        )
    }
}

export default connect(

// store state
// reducer method
function mapStateToProps(state) {
    return {
        curField: state.courseTabList.curField
    }
},

function mapDispatchToProps(dispatch) {
    return {
        changeCourseField: (field) => dispatch(changeCourseField(field))
    }
}

) (IndexPage)