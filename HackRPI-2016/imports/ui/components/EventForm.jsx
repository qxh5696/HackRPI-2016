import { Meteor } from 'meteor/meteor';
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import StateOption from './StateOption.jsx';

export default class EventForm extends Component{

    constructor(props){
        super(props);
        this.state = {optionTags: []};
        // this.fetchOptions();
    }

    componentWillMount(){
        Meteor.call('getStates',(err, res) => {
            if(err){
                console.log(err);
                return false;
            }
            else{
                var options = [];
                for( var i =0; i < res.length ; i++) {
                    var state = res[i];
                    options.push(<StateOption key={state.abbreviation} abbrev={state.abbreviation}/>);
                }
                this.setState({optionTags: options});
            }
        });

    }

    componentDidMount(){
        /*$.getScript('/mapChanger.js')
            .done()*/
    }

    render(){

        return(
            <div>
                <form id="eventForm">
                    <input id="city"/>
                    <select id="state">
                        {this.state.optionTags}
                    </select>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}