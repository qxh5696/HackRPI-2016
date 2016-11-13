import React, {Component} from 'react';

export default class LandingPage extends Component{

    profileHandleClick(event){
        event.preventDefault();
        //FlowRouter.go('/');
    }

    createEventHandleClick(event){
        event.preventDefault();
        FlowRouter.go(createEvent);
    }

    addEventHandleClick(event){
        event.preventDefault();
        //FlowRouter.go('/');
    }

    logoutHandleClick(event){
        event.preventDefault();
        Meteor.logout(function(){
            FlowRouter.go('Home');
        });
    }

    navbar(){
        var navBarInstance = (
            <ul>
                <li id="left_tab"><a onClick={this.profileHandleClick.bind(this)}>Profile</a></li>
                <li><a onClick={this.createEventHandleClick.bind(this)}>Create Event</a></li>
                <li id="logout"><a onClick={this.logoutHandleClick.bind(this)}>Logout</a></li>
            </ul>
        );

        return navBarInstance;
    }

    render() {
        return(
            this.navbar()
        );
    }
};