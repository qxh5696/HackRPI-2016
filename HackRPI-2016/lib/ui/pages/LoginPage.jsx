import React, {Component} from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';

import LoginForm from '../components/LoginForm.jsx';

export default class RegisterPage extends Component{
    componentWillMount(){
        document.title = "Login";
    }

    handleSubmit(user,pwd){
        console.log("handling submit");

        Meteor.loginWithPassword(user,pwd,function(err){
            if(err){
                console.log(err.reason);
                return false;
            }
        });



        // FlowRouter.go('/app');
    }


    cancel(){
        FlowRouter.go('Home');
    }

    render(){
        return (
            <div>
                <h1 className="text-center">Login Here!</h1>
                <LoginForm onSubmit={this.handleSubmit} onCancel={this.cancel}/>
            </div>
        );
    }
}