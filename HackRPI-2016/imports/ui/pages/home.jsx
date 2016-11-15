import React, {Component} from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import '../stylesheets/home.css';

export default class HomePage extends Component{

    loginHandleClick(event){
        event.preventDefault();
        FlowRouter.go('/login');
    }

    registerHandleClick(event){
        event.preventDefault();
        FlowRouter.go('/register');
    }

    image(){
        var images =(
            <div id="banner">
                <div><img id="Pic_1" src={'http://i65.tinypic.com/2j4q5uf.jpg'} border="0" alt="Num 1"/></div>
                <div><img id="Pic_2" src={'http://i68.tinypic.com/28lghvq.jpg'} border="0" alt="Num 2"/></div>
            </div>
        );

        return images;
    }

    navbar(){
        var navBarInstance = (
            <ul>
                <li id="left_tab"><a onClick={this.loginHandleClick.bind(this)}>Login</a></li>
                <li ><a onClick={this.registerHandleClick.bind(this)}>Register</a></li>
            </ul>
        );

        return navBarInstance;
    }

    render() {
        return(
            <div>
                {this.navbar()}
                {this.image()}
            </div>
        );
    }
};