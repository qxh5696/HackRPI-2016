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


    handleSubmit(event){
        event.preventDefault();
        let city = ReactDOM.findDOMNode(this.refs.city).value.trim();
        let state = ReactDOM.findDOMNode(this.refs.stateAbbrev).value.trim();
        this.props.onSubmit( city, state );
    }

    render(){

        return(
            <div>
                <form id="eventForm" onSubmit={this.handleSubmit.bind(this)}>
                    <input ref="city" id="city"/>
                    <select ref="stateAbbrev" id="state">
                        {this.state.optionTags}
                    </select>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}