import { Meteor } from 'meteor/meteor';
import React, { Component, PropTypes } from 'react';


export default class StateOption extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <option>{this.props? this.props.abbrev:""}</option>
        );
    }
}