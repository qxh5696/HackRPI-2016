import React, {Component} from 'react';


export default class LogoutButton extends Component{
    logout(){
        Meteor.logout(function(){
            FlowRouter.go('Home');
        });
    }

    render(){
        return <button className="" onClick={this.logout.bind(this)}>Logout</button>;
    }

}