import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';

import DataPage from '../lib/ui/pages/data.jsx';
import RegisterPage from '../lib/ui/pages/RegisterPage.jsx';
import LandingPage from '../lib/ui/pages/landing.jsx';
import LoginPage from '../lib/ui/pages/LoginPage.jsx';
import HomePage from '../lib/ui/pages/home.jsx';
import EventPage from '../lib/ui/pages/EventPage.jsx';

Accounts.onLogin(()=>{
        FlowRouter.go('Landing');
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

var eventRoutes = FlowRouter.group({
    prefix: "/events"
});

eventRoutes.route('/create',{
   name: 'createEvent',
    action(){
       mount(EventPage);
    }
});