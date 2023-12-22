import {Component} from 'react'
import Header from '../Header'
import LogoutButton from '../LogoutButton'
import './index.css'

class Home extends Component {
  render() {
    return (
      <div>
        <div className="bg-container">
          <Header />
          <h1>About Route</h1>
          <LogoutButton />
        </div>
      </div>
    )
  }
}

export default Home
