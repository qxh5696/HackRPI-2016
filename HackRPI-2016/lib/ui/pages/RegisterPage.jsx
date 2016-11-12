import React, {Component} from 'react';

import RegisterForm from '../components/RegisterForm.jsx';

export default class RegisterPage extends Component{
    componentWillMount(){
        document.title = "Register";
    }

    handleSubmit(email,user,password){
        event.preventDefault();
        Meteor.call('register',email,user,password);
    }

    cancel(){
        FlowRouter.go('home');
    }

    render(){
        return (
            <div>
                <h1 className="text-center">Register Here!</h1>
                <RegisterForm onSubmit={this.handleSubmit} onCancel={this.cancel}/>
            </div>
        );
    }
}