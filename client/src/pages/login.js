import React, { Component } from 'react';
import { connect } from 'react-redux'
import { submitLogin } from '../actions/authActions';

class Login extends Component {
    state = {
        email: '',
        password: ''
    }

    onPasswordChange = ({ target: { value } }) => this.setState({ password: value })


    onEmailChange = ({ target: { value } }) => this.setState({ email: value })

    render() {
        return (
            <section className="section">
                <div className="container section">
                    <div className="field">
                        <p className="control has-icons-left has-icons-right">
                            <input className="input" type="email" placeholder="Email" onChange={this.onEmailChange} value={this.state.email} />
                            <span className="icon is-small is-left">
                                <i className="fas fa-envelope" />
                            </span>
                            {this.state.email && <span className="icon is-small is-right">
                                <i className="fas fa-check" />
                            </span>}
                        </p>
                    </div>
                    <div className="field">
                        <p className="control has-icons-left">
                            <input className="input" type="password" placeholder="Password" onChange={this.onPasswordChange} value={this.state.password} />
                            {this.state.password && <span className="icon is-small is-left">
                                <i className="fas fa-lock" />
                            </span>}
                        </p>
                    </div>
                    <div className="field">
                        <p className="control">
                            <button className="button is-success" onClick={() => this.props.submitLogin(this.state)}>Login</button>
                        </p>
                    </div>
                </div>
            </section>
        );
    }
}

const mapStateToProps = state => ({ auth: state.auth })

const mapDispatchToProps = dispatch => ({
    submitLogin: (userInfo) => dispatch(submitLogin(userInfo)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);

