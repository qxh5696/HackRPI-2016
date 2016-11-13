import React, {Component} from 'react';



export default class DataPage extends Component{
    // constructor(props){
    //     super(props);
    //     console.log("constructor");
    //     document.title = "Home";
    // }

    componentDidMount(){
        Meteor.call('importData');
    }

    render(){
        return (
            <div className="importData"></div>
        );

    }

};