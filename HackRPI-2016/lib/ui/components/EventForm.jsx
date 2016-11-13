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

    render(){

        return(
            <div>
                <form>
                    <input/>
                    <select>
                        {this.state.optionTags}
                    </select>
                </form>
            </div>
        );
    }
}