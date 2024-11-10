import Cookies from 'js-cookie'
import {FiHome} from 'react-icons/fi'
import {RiSuitcase2Line} from 'react-icons/ri'
import {TbLogout2} from 'react-icons/tb'
import {Link, withRouter} from 'react-router-dom'
import './index.css'

const MobileViewNavbar = props => {
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }
  return (
    <div className="mobile-navbar-container">
      <Link to="/" className="mobile-navbar-icons-btn">
        <FiHome className="mobile-navbar-icons" />
      </Link>
      <Link to="/my-trips" className="mobile-navbar-icons-btn">
        <RiSuitcase2Line className="mobile-navbar-icons" />
      </Link>
      <button
        className="mobile-navbar-logout-icon-btn"
        type="button"
        onClick={onClickLogout}
      >
        <span className="mobile-view-logout-hidden-text">Logout</span>
        <TbLogout2 className="mobile-navbar-icons" />
      </button>
    </div>
  )
}

export default withRouter(MobileViewNavbar)
