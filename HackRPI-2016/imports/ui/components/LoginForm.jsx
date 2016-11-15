import React ,{ Component } from 'react';
import ReactDOM from 'react-dom';

import '../stylesheets/LoginForm.css';
export default class Home extends Component{

    handleSubmit(e){

        e.preventDefault();
        let user = ReactDOM.findDOMNode(this.refs.user).value.trim();
        let pwd = ReactDOM.findDOMNode(this.refs.password).value.trim();
        this.props.onSubmit( user, pwd );
    }

    cancel(e){
        e.preventDefault();
        this.props.onCancel();
    }

    render(){
        return(
            <div className="col-sm-6 col-md-offset-3 mainDiv">
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div className="form-group">
                        <div className="row">
                            <div className="col-sm-5 col-sm-offset-4">
                                <input
                                    className="form-control"
                                    placeholder="Enter Username or Email"
                                    type="text"
                                    ref="user"
                                />
                            </div>
                        </div>

                        <div className="row">

                            <div className="col-sm-5 col-sm-offset-4">
                                <input
                                    className="form-control"
                                    placeholder="Enter Password"
                                    type="password"
                                    ref="password"
                                />
                            </div>
                        </div>
                        <div className="row text-center">
                            <button type="submit" className="btn btn-primary col-sm-offset-1">Login</button>
                            <a onClick={this.cancel.bind(this)} className="btn btn-danger col-sm-offset-1">Cancel</a>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}