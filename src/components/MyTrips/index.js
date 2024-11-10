import {useContext} from 'react'
import {Link} from 'react-router-dom'
import MobileViewNavbar from '../MobileViewNavbar'
import DesktopViewNavbar from '../DesktopViewNavbar'
import BookingContext from '../../context/BookingContext'
import MyTripItem from '../MyTripItem'

import './index.css'

const MyTrips = () => {
  const bookingContext = useContext(BookingContext)
  const {myTripsList} = bookingContext

  return (
    <div className="my-trips-page-container">
      <DesktopViewNavbar />
      {myTripsList.length === 0 ? (
        <div className="my-trips-empty-view-container">
          <div className="empty-mssg-card">
            <img
              className="empty-bag-img"
              src="https://res.cloudinary.com/da9omg4ab/image/upload/v1728245693/empty-bag-img_rvrwb5.png"
              alt="no trips"
            />
            <h1 className="no-upcoming-trips-heading">No upcoming trips.</h1>
            <p className="no-upcoming-trips-heading-desc">
              When you book a trip, you will see your trip details here.
            </p>
            <Link className="link-element" to="/book-a-new-trip">
              <button
                className="my-trips-empty-view-book-trip-button"
                type="button"
              >
                Book a new trip
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="my-trips-content-container">
          <h1 className="my-trips-heading">My Trips</h1>
          <ul className="my-trips-list">
            {myTripsList.map(each => {
              const {tripId} = each
              return <MyTripItem key={tripId} tripDetails={each} />
            })}
          </ul>
        </div>
      )}
      <MobileViewNavbar />
    </div>
  )
}

export default MyTrips
