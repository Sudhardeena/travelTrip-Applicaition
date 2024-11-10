import {useContext} from 'react'
import BookingContext from '../../context/BookingContext'

import './index.css'

const BookingSuccessView = () => {
  const bookingContext = useContext(BookingContext)
  const {resetBooking, setBookingInPreogress} = bookingContext

  const onClickBookNewTripBtn = () => {
    resetBooking()
    setBookingInPreogress(true)
  }

  return (
    <div className="booking-successfull-view-container">
      <div className="success-mssg-card">
        <img
          className="tick-img"
          src="https://assets.ccbp.in/frontend/react-js/travel-trip-steps-successfully-completed-img.png"
          alt="Success"
        />
        <h1 className="awesome-heading">Awesome!</h1>
        <p className="booking-confirmed-text">
          Your booking has been confirmed.
        </p>
        <button
          className="success-view-book-trip-button"
          type="button"
          onClick={onClickBookNewTripBtn}
        >
          Book a New Trip
        </button>
      </div>
    </div>
  )
}

export default BookingSuccessView
