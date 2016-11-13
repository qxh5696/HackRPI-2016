import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';

import DataPage from '../lib/ui/pages/data.jsx';
import RegisterPage from '../lib/ui/pages/RegisterPage.jsx';
import AppLanding from '../lib/ui/pages/AppLanding.jsx';
import LoginPage from '../lib/ui/pages/LoginPage.jsx';
import HomePage from '../lib/ui/pages/home.jsx';


Accounts.onLogin(()=>{
        FlowRouter.go('app');
    }
);

FlowRouter.route('/',{
    name:'Home',
    action(){
        mount(HomePage);
    }
});

FlowRouter.route('/data',{
    name: 'Data',
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

FlowRouter.route('/home',{
    name: 'app',
    action(){
        mount(AppLanding);
    }
});

FlowRouter.route('/login',{
    name: 'Login',
    action(){
        mount(LoginPage);
    }

});
