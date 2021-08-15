import React, { Component } from 'react';
import { getCourseFields } from '../../models';

import FieldItem from './FieldItem';

import './index.css';

export default class CourseFiled extends Component {
    state = {
        fieldData: []
    }

    async getFieldData() {
        const fieldData = await getCourseFields();
        this.setState({
            fieldData
        })
    }

    componentDidMount() {
        this.getFieldData();
    }

    render() {
        const{ fieldData } = this.state,
             { curField, changeCourseField } = this.props;

        return (
            <div className="field-wrapper">
                <FieldItem
                    key={ '-1' }
                    item={ {field: '-1', field_name: '全部课程' } }
                    curField={ curField }
                    changeCourseField={ () => changeCourseField('-1') }
                />
                {
                    fieldData.map((item, index) => {
                        return (
                            <FieldItem 
                                key={ index }
                                item={ item }
                                curField={ curField }
                                changeCourseField={ () => changeCourseField(item.field) }
                            />
                        );
                    })
                }
            </div>
        )
    }
}