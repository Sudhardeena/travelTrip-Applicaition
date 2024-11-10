import {useContext} from 'react'
import './index.css'
import BookingContext from '../../context/BookingContext'

const stepsList = [
  {stepId: 'YOUR_DETAILS', displayText: 'Your Details'},
  {stepId: 'DATE_SELECTION', displayText: 'Date Selection'},
  {stepId: 'GUESTS', displayText: 'Guests'},
  {stepId: 'TRAVEL_ASSISTANCE', displayText: 'Travel Assistance'},
  {stepId: 'CONFIRMATION', displayText: 'Confirmation'},
]

const DesktopCurrentFormIndicator = () => {
  const bookingContext = useContext(BookingContext)
  const {activeFormId, bookingInProgress} = bookingContext
  const currentFormIndex = stepsList.findIndex(
    each => each.stepId === activeFormId,
  )
  console.log(currentFormIndex)

  const renderFormPositions = (each, index, activeFormPositionClassName) => {
    if (bookingInProgress) {
      if (index < currentFormIndex) {
        return (
          <img
            className="desktop-form-indicator-tick-image"
            src="https://assets.ccbp.in/frontend/react-js/travel-trip-steps-successfully-completed-img.png"
            alt={each.displayText}
          />
        )
      }
      return (
        <span
          className={`current-form-position-number ${activeFormPositionClassName}`}
        >
          {index + 1}
        </span>
      )
    }
    return (
      <img
        className="desktop-form-indicator-tick-image"
        src="https://assets.ccbp.in/frontend/react-js/travel-trip-steps-successfully-completed-img.png"
        alt={each.displayText}
      />
    )
  }

  return (
    <ul className="desktop-form-indicator">
      {stepsList.map((each, index) => {
        const {stepId} = each
        const activeFormPositionClassName =
          stepId === activeFormId ? 'active-desktop-form-position' : ''
        const activeFormDisplayTextClassName =
          stepId === activeFormId ? 'active-desktop-form-display-text' : ''
        return (
          <li className="desktop-form-indicator-item" key={each.stepId}>
            {renderFormPositions(each, index, activeFormPositionClassName)}
            <p
              className={`current-desktop-form-name-display-text ${activeFormDisplayTextClassName}`}
            >
              {each.displayText}
            </p>
          </li>
        )
      })}
    </ul>
  )
}

export default DesktopCurrentFormIndicator
