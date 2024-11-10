import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai'

import './index.css'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    showError: false,
    errorMssg: '',
  }

  onChangeUserNameInput = event => this.setState({username: event.target.value})

  onChangePasswordInput = event => this.setState({password: event.target.value})

  onLoginSucess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    const {history} = this.props
    history.replace('/')
  }

  onLoginFailure = errorMssg => {
    this.setState({errorMssg, showError: true})
  }

  onSubmitLogin = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {
      username,
      password,
    }
    console.log(userDetails)
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    console.log(response)

    const data = await response.json()
    console.log(data)

    if (response.ok) {
      this.onLoginSucess(data.jwt_token)
    } else {
      this.onLoginFailure(data.error_msg)
    }
  }

  onClickEyeIcon = () =>
    this.setState(prevState => ({
      showPassword: !prevState.showPassword,
    }))

  render() {
    const token = Cookies.get('jwt_token')
    if (token !== undefined) {
      return <Redirect to="/" />
    }
    const {username, password, showPassword, showError, errorMssg} = this.state
    return (
      <div className="login-page-container">
        <form className="login-content-container" onSubmit={this.onSubmitLogin}>
          <h1 className="login-travel-trip-logo">Travel Trip</h1>
          <div className="input-field">
            <label className="user-name-label label" htmlFor="userNameInput">
              Username
            </label>
            <br />
            <input
              id="userNameInput"
              className="input"
              value={username}
              placeholder="Username"
              type="text"
              onChange={this.onChangeUserNameInput}
            />
          </div>
          <div className="input-field">
            <label className="password-label label" htmlFor="passwordInput">
              Password
            </label>
            <br />
            <div className="password-input-container input">
              <input
                id="passwordInput"
                className="password-input"
                value={password}
                placeholder="Password"
                type={showPassword ? 'text' : 'password'}
                onChange={this.onChangePasswordInput}
              />
              <button
                type="button"
                className="show-password-btn"
                onClick={this.onClickEyeIcon}
                data-testid="show-password"
              >
                {showPassword ? (
                  <AiOutlineEyeInvisible className="eye-icon" />
                ) : (
                  <AiOutlineEye className="eye-icon" />
                )}
              </button>
            </div>
          </div>
          {showError && <p className="error-msg">{errorMssg}</p>}
          <button className="login-btn" type="submit">
            Login
          </button>
        </form>
      </div>
    )
  }
}

export default Login
