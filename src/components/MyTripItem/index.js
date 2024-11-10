import './index.css'
import BookingContext from '../../context/BookingContext'

const MyTripItem = props => {
  const {tripDetails} = props

  const {tripId, endLocation, startDate, endDate} = tripDetails

  return (
    <li className="my-trip-list-item">
      <h1 className="my-trip-item-name">{endLocation}</h1>
      <div className="my-trip-date-info-container">
        <p className="date-text">Date</p>
        <p className="start-end-date-text">
          {startDate} to {endDate}
        </p>
      </div>
      <BookingContext.Consumer>
        {value => {
          const {removeTrip} = value
          const onClickCancelBtn = () => {
            removeTrip(tripId)
          }
          return (
            <button
              type="button"
              className="trip-cancel-btn"
              onClick={onClickCancelBtn}
            >
              cancel
            </button>
          )
        }}
      </BookingContext.Consumer>
    </li>
  )
}

MyTripItem.contextType = BookingContext
export default MyTripItem
