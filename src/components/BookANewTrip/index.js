import {Component} from 'react'
import DesktopViewNavbar from '../DesktopViewNavbar'
import MobileViewNavbar from '../MobileViewNavbar'
import MobileCurrentFormIndicator from '../MobileCurrentFormIndicator'
import BookingContext from '../../context/BookingContext'
import DesktopCurrentFormIndicator from '../DesktopCurrentFormIndicator'
import UserDetailsForm from '../UserDetailsForm'
import DateSelectionForm from '../DateSelectionForm'
import GuestDetailsForm from '../GuestDetailsForm'
import TravelAssistanceForm from '../TravelAssistanceForm'
import ConfirmationForm from '../ConfirmationForm'
import BookingSuccessView from '../BookingSuccessView'
import './index.css'

class BookANewTrip extends Component {
  // onClickSetactiveform = () => {
  //   const {setActiveFormId} = this.context
  //   setActiveFormId('GUESTS')
  // }

  renderRespectiveForm = () => {
    const bookingContext = this.context
    const {activeFormId} = bookingContext
    switch (activeFormId) {
      case 'YOUR_DETAILS':
        return <UserDetailsForm />
      case 'DATE_SELECTION':
        return <DateSelectionForm />
      case 'GUESTS':
        return <GuestDetailsForm />
      case 'TRAVEL_ASSISTANCE':
        return <TravelAssistanceForm />
      case 'CONFIRMATION':
        return <ConfirmationForm />
      default:
        return null
    }
  }

  render() {
    const bookingContext = this.context
    const {bookingInProgress} = bookingContext
    return (
      <div className="new-trip-page-container">
        <DesktopViewNavbar />
        <MobileCurrentFormIndicator />
        <div className="book-a-new-trip-page-body">
          <div className="desktop-form-indicator-and-forms-container">
            <DesktopCurrentFormIndicator />
            {bookingInProgress ? (
              this.renderRespectiveForm()
            ) : (
              <BookingSuccessView />
            )}
          </div>
        </div>
        <MobileViewNavbar />
      </div>
    )
  }
}

BookANewTrip.contextType = BookingContext
export default BookANewTrip
