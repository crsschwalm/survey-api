import React, { Component } from 'react';
import { connect } from 'react-redux'
import { register } from '../actions/authActions';
import { Container, Field, ButtonGroup } from '../components/login'
import { Lock, User, Check } from '../components/login/Icons'

class Login extends Component {
    state = {
        name: '',
        username: '',
        password: '',
        confirmPassword: '',
    }
    onNameChange = ({ target: { value } }) => this.setState({ name: value })
    onUsernameChange = ({ target: { value } }) => this.setState({ username: value })
    onPasswordChange = ({ target: { value } }) => this.setState({ password: value })
    onConfirmPasswordChange = ({ target: { value } }) => this.setState({ confirmPassword: value })

    validPasswords = () => this.state.password === this.state.confirmPassword && !!this.state.password

    canSubmit = () => {
        const notEmpty = !!this.state.name && !!this.state.username && !!this.state.password && !!this.state.confirmPassword
        return notEmpty && this.validPasswords();
    }

    render() {
        return (
            <Container>
                <Field>
                    <input className="input" type="text" placeholder="Name" onChange={this.onNameChange} value={this.state.name} />
                    <User />
                    {this.state.name && <Check />}
                </Field>
                <Field>
                    <input className="input" type="text" placeholder="UserName" onChange={this.onUsernameChange} value={this.state.username} />
                    <User />
                    {this.state.username && <Check />}
                </Field>
                <Field>
                    <input className="input" type="password" placeholder="Password" onChange={this.onPasswordChange} value={this.state.password} />
                    <Lock />
                    {this.validPasswords() && <Check />}
                </Field>
                <Field>
                    <input className="input" type="password" placeholder="Password" onChange={this.onConfirmPasswordChange} value={this.state.confirmPassword} />
                    <Lock />
                    {this.validPasswords() && <Check />}
                </Field>
                <ButtonGroup>
                    <div className="control">
                        <button className="button is-success" disabled={!this.canSubmit()} onClick={() => this.props.register(this.state)}>Register</button>
                    </div>
                    <div className="control">
                        <button className="button is-text" onClick={() => window.location.replace('/login')}>Existing User?</button>
                    </div>
                </ButtonGroup>
            </Container>
        );
    }
}

const mapStateToProps = state => ({ auth: state.auth })

const mapDispatchToProps = dispatch => ({
    register: (userInfo) => dispatch(register(userInfo)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);

