import { Meteor } from 'meteor/meteor';
import React, { Component, PropTypes } from 'react';

import EventForm from '../components/EventForm.jsx';
export default class EventPage extends Component{

    render(){
        return(
            <EventForm/>
        );
    }
}