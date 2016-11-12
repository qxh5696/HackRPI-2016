import React ,{ Component } from 'react';
import ReactDOM from 'react-dom';

export default class Home extends Component{

    handleSubmit(e){

        e.preventDefault();
        let email = ReactDOM.findDOMNode(this.refs.username).value.trim();
        let username = ReactDOM.findDOMNode(this.refs.username).value.trim();
        let pwd = ReactDOM.findDOMNode(this.refs.password).value.trim();
        this.props.onSubmit( email,username,pwd );
    }

    cancel(e){
        this.props.onCancel(e);
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div className="form-group">
                        <div className="row">
                            <label className="col-sm-2 control-label col-sm-offset-4">Email Address:</label>
                            <div className="col-sm-2">
                                <input
                                    className="form-control"
                                    placeholder="Enter Email Address"
                                    type="email"
                                    ref="email"
                                />
                            </div>
                        </div>

                        <div className="row">
                            <label className="col-sm-2 control-label col-sm-offset-4">Username:</label>
                            <div className="col-sm-2">
                                <input
                                    className="form-control"
                                    placeholder="Enter Desired Username"
                                    type="text"
                                    ref="username"
                                />
                            </div>
                        </div>

                        <div className="row">
                            <label className="col-sm-2 control-label col-sm-offset-4">Password:</label>
                            <div className="col-sm-2">
                                <input
                                    className="form-control"
                                    placeholder="Enter Desired Password"
                                    type="password"
                                    ref="password"
                                />
                            </div>
                        </div>
                        <div className="row text-center">
                            <button type="submit" className="btn btn-primary">Register</button>
                            <a onClick={this.cancel.bind(this)} className="btn btn-danger col-sm-offset-1">Cancel</a>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}