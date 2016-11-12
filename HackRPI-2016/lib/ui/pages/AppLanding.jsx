import React, {Component} from 'react';


export default class AppLanding extends Component{
    componentWillMount(){
        document.title = "App";
    }

    render(){
        return (
            <h1>Welcome Home {Meteor.user().username}!</h1>
        );
    }
}