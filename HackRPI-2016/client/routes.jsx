import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';

import DataPage from '../lib/ui/pages/data.jsx';

FlowRouter.route('/',{
    name: 'Home',
    action(){
        mount(DataPage);
    }
});
