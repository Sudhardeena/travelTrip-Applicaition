import {Component} from 'react'
import './index.css'
import {v4 as uuidV4} from 'uuid'
import BookingContext from '../../context/BookingContext'

class ConfirmationForm extends Component {
  bookingContext = this.context

  guestCount = Object.values(this.bookingContext.guestsDetails).reduce(
    (a, b) => a + b,
  )

  onClickCancelBtn = () => {
    const {resetBooking} = this.bookingContext
    resetBooking()
  }

  onClickConfirmBtn = e => {
    e.preventDefault()
    const {
      setActiveFormId,
      setBookingInPreogress,
      addTrip,
      name,
      startLocation,
      endLocation,
      startDate,
      endDate,
      guestsDetails,
      travelAssistance,
    } = this.bookingContext

    addTrip({
      tripId: uuidV4(),
      name,
      startLocation,
      endLocation,
      startDate,
      endDate,
      guestsDetails,
      travelAssistance,
    })
    setActiveFormId('')
    setBookingInPreogress(false)
  }

  render() {
    const {
      name,
      startLocation,
      endLocation,
      startDate,
      endDate,
      travelAssistance,
    } = this.bookingContext
    return (
      <div className="confirmation-form-container">
        <h1 className="confirmation-h1">Confirmation</h1>
        <p className="confirmation-desc">Confirm your details</p>
        <form className="confirmation-form" onSubmit={this.onClickConfirmBtn}>
          <div className="confirmation-form-trip-deatils-item-container">
            <p className="confirmation-form-trip-deatils-item-name">Name:</p>
            <p className="confirmation-form-trip-deatils-item-value">{name}</p>
          </div>
          <div className="confirmation-form-trip-deatils-item-container">
            <p className="confirmation-form-trip-deatils-item-name">
              Start Location:
            </p>
            <p className="confirmation-form-trip-deatils-item-value">
              {startLocation}
            </p>
          </div>
          <div className="confirmation-form-trip-deatils-item-container">
            <p className="confirmation-form-trip-deatils-item-name">
              End Location:
            </p>
            <p className="confirmation-form-trip-deatils-item-value">
              {endLocation}
            </p>
          </div>
          <div className="confirmation-form-trip-deatils-item-container">
            <p className="confirmation-form-trip-deatils-item-name">
              Start Date:
            </p>
            <p className="confirmation-form-trip-deatils-item-value">
              {startDate}
            </p>
          </div>
          <div className="confirmation-form-trip-deatils-item-container">
            <p className="confirmation-form-trip-deatils-item-name">
              End Date:
            </p>
            <p className="confirmation-form-trip-deatils-item-value">
              {endDate}
            </p>
          </div>
          <div className="confirmation-form-trip-deatils-item-container">
            <p className="confirmation-form-trip-deatils-item-name">Guests:</p>
            <p className="confirmation-form-trip-deatils-item-value">
              {this.guestCount}
            </p>
          </div>
          <div className="confirmation-form-trip-deatils-item-container">
            <p className="confirmation-form-trip-deatils-item-name">
              Travel Assistance:
            </p>
            <p className="confirmation-form-trip-deatils-item-value">
              {travelAssistance === '' ? 'Not Required' : travelAssistance}
            </p>
          </div>
          <button
            className="confirmation-previous-btn confirmation-btn"
            type="button"
            onClick={this.onClickCancelBtn}
          >
            Cancel
          </button>
          <button
            className="confirmation-next-btn confirmation-btn"
            type="submit"
          >
            Confirm
          </button>
        </form>
      </div>
    )
  }
}

ConfirmationForm.contextType = BookingContext
export default ConfirmationForm
