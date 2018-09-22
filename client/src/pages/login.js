import React, { Component } from 'react';
import { connect } from 'react-redux'
import { login } from '../actions/authActions';
import { Container, Field, ButtonGroup } from '../components/login'
import { Lock, User, Check } from '../components/login/Icons'

class Login extends Component {
    state = {
        username: '',
        password: ''
    }

    onPasswordChange = ({ target: { value } }) => this.setState({ password: value })
    onUsernameChange = ({ target: { value } }) => this.setState({ username: value })
    canSubmit = () => !!this.state.username && !!this.state.password

    render() {
        return (
            <Container>
                <Field>
                    <input className="input" type="text" placeholder="UserName" onChange={this.onUsernameChange} value={this.state.username} />
                    <User />
                    {this.state.username && <Check />}
                </Field>
                <Field>
                    <input className="input" type="password" placeholder="Password" onChange={this.onPasswordChange} value={this.state.password} />
                    <Lock />
                    {this.state.password && <Check />}
                </Field>
                <ButtonGroup>
                    <div className="control">
                        <button className="button is-success" disabled={!this.canSubmit()} onClick={() => this.props.login(this.state)}>Login</button>
                    </div>
                    <div className="control">
                        <button className="button is-text" onClick={() => window.location.replace('/register')}>New User?</button>
                    </div>
                </ButtonGroup>
            </Container>
        );
    }
}

const mapStateToProps = state => ({ auth: state.auth })

const mapDispatchToProps = dispatch => ({
    login: (userInfo) => dispatch(login(userInfo)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);

