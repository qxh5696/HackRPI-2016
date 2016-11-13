import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';

import DataPage from '../lib/ui/pages/data.jsx';
import HomePage from '../lib/ui/pages/home.jsx';

FlowRouter.route('/',{
    name: 'Home',
    action(){
        mount(HomePage);
    }
});

FlowRouter.route('/data', {
    name: 'Data',
    action(){
        mount(DataPage);
    }
})