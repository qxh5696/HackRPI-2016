import React, {Component} from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import RegisterForm from '../components/RegisterForm.jsx';

export default class RegisterPage extends Component{
    componentWillMount(){
        document.title = "Register";
    }

    handleSubmit(email,user,pwd){
        console.log("handling submit");

        let userObject = {
            email: email,
            username: user,
            password: pwd
        };

        Accounts.createUser(userObject,function(err){
            if(err){
                console.error(err.reason);
                console.log(err.reason);
            }
            else{
                FlowRouter.go('app');
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
                <h1 className="text-center">Register Here!</h1>
                <RegisterForm onSubmit={this.handleSubmit} onCancel={this.cancel}/>
            </div>
        );
    }
}