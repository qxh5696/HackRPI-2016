import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';
import { render } from 'react-dom';
import DataPage from '../imports/ui/pages/data.jsx';
import RegisterPage from '../imports/ui/pages/RegisterPage.jsx';
import LandingPage from '../imports/ui/pages/landing.jsx';
import LoginPage from '../imports/ui/pages/LoginPage.jsx';
import HomePage from '../imports/ui/pages/home.jsx';
import EventPage from '../imports/ui/pages/EventPage.jsx';

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
        // mount(DataPage);
        var checkExist =  setInterval(function() {
            if ($('#root').length) {
                console.log("Exists!");
                clearInterval(checkExist);
                render(<DataPage/>,document.getElementById('root'));
            }
        }, 100);
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