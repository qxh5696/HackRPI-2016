import React, {Component} from 'react';

export default class HomePage extends Component{

    navbar(){
        var navBarInstance = (
            <ul>
                <li><a href="default.asp">Home</a></li>
                <li><a href="news.asp">News</a></li>
                <li><a href="contact.asp">Contact</a></li>
                <li><a href="about.asp">About</a></li>
            </ul>
        );

        return navBarInstance;
    }

    render() {
        return(
            this.navbar()
        );
    }
};