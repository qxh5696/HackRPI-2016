import { Meteor } from 'meteor/meteor';
import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Person } from '../../api/auth.js';
import LogoutButton from '../components/LogoutButton.jsx';

class AppLanding extends Component{
    constructor(props){
        super(props);
    }

    componentWillMount(){

        document.title = "App";
    }

    render(){
        return (
            <div>
                <h1>Welcome Home {this.props.currentUser? this.props.currentUser.username: ""}!</h1>
                <LogoutButton/>
            </div>
        );
    }
}

AppLanding.propTypes = {
    tasks: PropTypes.array.isRequired,
    currentUser: PropTypes.object,
};

export default createContainer(() => {
    Meteor.subscribe('person');
    return {
        tasks: Person.find({}, { sort: { createdAt: -1 } }).fetch(),
        currentUser: Meteor.user(),
    };
}, AppLanding);