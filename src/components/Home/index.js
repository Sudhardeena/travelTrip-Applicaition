import './index.css'
import {Link} from 'react-router-dom'
import MobileViewNavbar from '../MobileViewNavbar'
import DesktopViewNavbar from '../DesktopViewNavbar'

const Home = () => (
  <div className="home-page-container">
    <DesktopViewNavbar />
    <div className="home-banner-container">
      <img
        className="home-page-mobile-view-girl-image"
        src="https://res.cloudinary.com/da9omg4ab/image/upload/v1725436897/image_5_2_qqtzau.png"
        alt="home-page-mobile-view-girl-image"
      />
      <img
        className="home-page-desktop-view-girl-image"
        src="https://res.cloudinary.com/da9omg4ab/image/upload/v1725441640/image_5_3_bbacde.png"
        alt="home-page-desktop-view-girl-image"
      />
      <div className="home-banner-info-container">
        <h1 className="home-banner-heading">Travel. Relax. Memories.</h1>
        <p className="home-banner-description">
          With travel trip you can experience new travel and the best tourist
          destinations.
        </p>
        <Link className="home-book-a-new-trip-link" to="/book-a-new-trip">
          <button className="book-trip-button" type="button">
            Book a new trip
          </button>
        </Link>
      </div>
    </div>
    <MobileViewNavbar />
  </div>
)

export default Home
