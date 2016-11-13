import React, {Component} from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';


export default class HomePage extends Component{

    loginHandleClick(event){
        event.preventDefault();
        FlowRouter.go('/login');
    }

    registerHandleClick(event){
        event.preventDefault();
        FlowRouter.go('/register');
    }

    navbar(){
        var navBarInstance = (
            <ul>
                <li><a onClick={this.loginHandleClick.bind(this)}>Login</a></li>
                <li ><a onClick={this.registerHandleClick.bind(this)}>Register</a></li>
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