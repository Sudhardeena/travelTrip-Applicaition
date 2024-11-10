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

const MobileCurrentFormIndicator = () => {
  const bookingContext = useContext(BookingContext)
  const {activeFormId} = bookingContext

  return (
    <ul className="mobile-form-indicator-list">
      {stepsList.map(each => {
        const {stepId} = each
        const activeFormClassName =
          stepId === activeFormId ? 'active-mobile-form' : ''
        return (
          <li
            className={`mobile-form-indicator-item ${activeFormClassName}`}
            key={each.stepId}
          />
        )
      })}
    </ul>
  )
}

// MobileCurrentFormIndicator.contextType = BookingContext
export default MobileCurrentFormIndicator
