import React, { Component } from 'react';

class AuthForm extends Component {
    constructor(props) {
        super(props);
        this.state = { email: '', password: '' }
    }

    onSubmit(e) {
        e.preventDefault();
        const { email, password } = this.state;
        this.props.onSubmit({ email, password });
    }

    render() {
        var d = new Date();
        var n = d.getTime();
        return (<div className="row">
            <form className="col s6" onSubmit={this.onSubmit.bind(this)}>
                <div className="input field">
                    <input placeholder="Email" onChange={e => this.setState({ email: e.target.value })} value={this.state.email}/>
                </div>
                <div className="input-field">
                    <input type="password" placeholder="Password" onChange={e => this.setState({ password: e.target.value })} value={this.state.password} />
                </div>
                <div className="errors">
                    {this.props.errors.map(error =>  <div key={n}>{ error }</div>)}
                </div>
                <button className="btn">Submit</button>
            </form>
        </div>);
    }
}

export default AuthForm;