import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';

import DataPage from '../lib/ui/pages/data.jsx';
import RegisterPage from '../lib/ui/pages/RegisterPage.jsx';
import AppLanding from '../lib/ui/pages/AppLanding.jsx';

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

FlowRouter.route('/home',{
    name: 'app',
    action(){
        mount(AppLanding);
    }
});
