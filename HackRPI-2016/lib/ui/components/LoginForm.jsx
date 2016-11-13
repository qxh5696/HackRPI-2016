import React ,{ Component } from 'react';
import ReactDOM from 'react-dom';

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
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div className="form-group">
                        <div className="row">
                            <label className="col-sm-2 control-label col-sm-offset-4">Username or Email:</label>
                            <div className="col-sm-2">
                                <input
                                    className="form-control"
                                    placeholder="Enter Username or Email"
                                    type="text"
                                    ref="user"
                                />
                            </div>
                        </div>

                        <div className="row">
                            <label className="col-sm-2 control-label col-sm-offset-4">Password:</label>
                            <div className="col-sm-2">
                                <input
                                    className="form-control"
                                    placeholder="Enter Password"
                                    type="password"
                                    ref="password"
                                />
                            </div>
                        </div>
                        <div className="row text-center">
                            <button type="submit" className="btn btn-primary">Login</button>
                            <a onClick={this.cancel.bind(this)} className="btn btn-danger col-sm-offset-1">Cancel</a>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}