import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Helmet from 'react-helmet'
import { push } from 'react-router-redux'
import * as authActions from '../../redux/auth'
import { PasswordInput, Input, Heading, SignInForm } from './LoginStyles'

class Login extends Component {
  static propTypes = {
    login: PropTypes.func,
    logout: PropTypes.func,
    push: PropTypes.func,
    redirectBackLink: PropTypes.string,
    user: PropTypes.object,
  }

  state = {
    username: '',
    password: '',
  }

  onChange = event => {
    const field = event.target.name
    return this.setState({ [field]: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault()
    const { username, password } = this.state
    this.props.login(username, password).then(() => this.redirectIfSuccess())
  }

  redirectIfSuccess = () => {
    const { user, redirectBackLink } = this.props
    if (user) {
      this.props.push(redirectBackLink)
    }
  }

  render() {
    const { user, logout } = this.props
    return (
      <div className="container">
        <Helmet title="Вход" />
        {!user && (
          <SignInForm>
            <Heading>Пожалуйста, авторизуйтесь</Heading>
            <Input
              type="text"
              name="username"
              placeholder="Введите имя пользователя"
              value={this.state.username}
              onChange={this.onChange}
              required
              autoFocus
            />
            <PasswordInput
              type="password"
              name="password"
              placeholder="Введите пароль"
              value={this.state.password}
              onChange={this.onChange}
              required
            />
            <button
              className="btn btn-lg btn-success btn-block"
              type="submit"
              onClick={this.handleSubmit}
            >
              <i className="fa fa-sign-in" /> Вход
            </button>
          </SignInForm>
        )}
        {user && (
          <div>
            <p>Вы зашли под пользователем {user.userName}.</p>

            <div>
              <button className="btn btn-danger" onClick={logout}>
                <i className="fa fa-sign-out" /> Выйти
              </button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default connect(
  state => ({
    user: state.auth.user,
    redirectBackLink: state.auth.redirectBackLink,
  }),
  { ...authActions, push },
)(Login)
