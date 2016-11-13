import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';

import DataPage from '../lib/ui/pages/data.jsx';
import RegisterPage from '../lib/ui/pages/RegisterPage.jsx';
import LandingPage from '../lib/ui/pages/landing.jsx';
import LoginPage from '../lib/ui/pages/LoginPage.jsx';


Accounts.onLogin(()=>{
        FlowRouter.go('app');
    }
);

FlowRouter.route('/',{
    name: 'Home',
    action(){
        mount(DataPage);
    }
});

FlowRouter.route('/register',{
    name: 'Register',
    action(){
        mount(RegisterPage);
    }
});

FlowRouter.route('/landing',{
    name: 'Landing',
    action(){
        mount(LandingPage);
    }
});

FlowRouter.route('/login',{
    name: 'Login',
    action(){
        mount(LoginPage);
    }

});
