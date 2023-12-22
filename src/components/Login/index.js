import {Component} from 'react'
import Cookies from 'js-cookie'
import './index.css'

class Login extends Component {
  action = () => {
    Cookies.set('jwt_token', 'Us1L90PXl...', {expires: 1})
    const {history} = this.props
    history.replace('/')
  }

  render() {
    return (
      <div>
        <div className="bg-container">
          <h1>Please Login</h1>
          <button type="button" onClick={this.action}>
            Login with Sample Creds
          </button>
        </div>
      </div>
    )
  }
}

export default Login
