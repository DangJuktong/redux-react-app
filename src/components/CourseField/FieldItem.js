import React, { Component } from 'react';

export default class FieldItem extends Component{
    render() {

        const { item, curField, changeCourseField } = this.props;
        console.log(curField);
        return (
            <span
               className={ ["field-item", item.field === curField ? "current-field" : ""].join(" ")}
               onClick={ () => changeCourseField(item.field) }
            >
               { item.field_name }
            </span>
        )
    }
}