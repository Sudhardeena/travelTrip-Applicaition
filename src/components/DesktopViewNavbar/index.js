import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const DesktopViewNavbar = props => {
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  return (
    <div className="desktop-navbar-container">
      <Link to="/" className="desktop-nav-link">
        <h1 className="desktop-navbar-logo">Travel Trip</h1>
      </Link>
      <div className="desktop-tabs-container">
        <Link className="desktop-nav-home-link desktop-nav-link" to="/">
          Home
        </Link>
        <Link
          className="desktop-nav-mytrip-link desktop-nav-link"
          to="/my-trips"
        >
          My Trips
        </Link>
      </div>
      <button
        className="desktop-logout-btn"
        type="button"
        onClick={onClickLogout}
      >
        Logout
      </button>
    </div>
  )
}

export default withRouter(DesktopViewNavbar)
