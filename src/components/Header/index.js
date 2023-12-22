import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div className="bg">
    <Link to="/">
      <p className="cont">Home</p>
    </Link>
    <Link to="/about">
      <p>About</p>
    </Link>
  </div>
)

export default Header
