import {Component} from 'react'
import './index.css'
import BookingContext from '../../context/BookingContext'

class GuestDetailsForm extends Component {
  bookingContext = this.context

  state = {
    adults: this.bookingContext.guestsDetails.adults,
    children: this.bookingContext.guestsDetails.children,
    infants: this.bookingContext.guestsDetails.infants,
  }

  onClickAdultsPlusBtn = () => {
    const bookingContext = this.context
    const {setGuestsDetails} = bookingContext
    this.setState(
      prevState => ({adults: prevState.adults + 1}),
      () => setGuestsDetails(this.state),
    )
  }

  onClickChildrenPlusBtn = () => {
    const bookingContext = this.context
    const {setGuestsDetails} = bookingContext
    this.setState(
      prevState => ({children: prevState.children + 1}),
      () => setGuestsDetails(this.state),
    )
  }

  onClickInfantsPlusBtn = () => {
    const bookingContext = this.context
    const {setGuestsDetails} = bookingContext
    this.setState(
      prevState => ({infants: prevState.infants + 1}),
      () => setGuestsDetails(this.state),
    )
  }

  onClickAdultsMinusBtn = () => {
    const {adults} = this.state
    if (adults > 1) {
      const bookingContext = this.context
      const {setGuestsDetails} = bookingContext
      this.setState(
        prevState => ({adults: prevState.adults - 1}),
        () => setGuestsDetails(this.state),
      )
    }
  }

  onClickChildrenMinusBtn = () => {
    const {children} = this.state
    if (children > 0) {
      const bookingContext = this.context
      const {setGuestsDetails} = bookingContext
      this.setState(
        prevState => ({children: prevState.children - 1}),
        () => setGuestsDetails(this.state),
      )
    }
  }

  onClickInfantsMinusBtn = () => {
    const {infants} = this.state
    if (infants > 0) {
      const bookingContext = this.context
      const {setGuestsDetails} = bookingContext
      this.setState(
        prevState => ({infants: prevState.infants - 1}),
        () => setGuestsDetails(this.state),
      )
    }
  }

  handleSubmit = e => {
    e.preventDefault()
    const bookingContext = this.context
    const {setActiveFormId} = bookingContext
    setActiveFormId('TRAVEL_ASSISTANCE')
  }

  onClickPreviousBtn = () => {
    const bookingContext = this.context
    const {setActiveFormId} = bookingContext
    setActiveFormId('DATE_SELECTION')
  }

  render() {
    const {adults, children, infants} = this.state
    return (
      <div className="guest-details-form-container">
        <h1 className="guest-details-h1">Guests</h1>
        <p className="guest-details-desc">Select your Guests</p>
        <form className="guest-details-form" onSubmit={this.handleSubmit}>
          <div className="guest-details-input-feilds">
            <div className="guest-details-type-container">
              <p className="guest-details-type-name">Adults</p>
              <p className="guest-details-type-desc">Age 13 or above</p>
            </div>
            <div className="guest-details-editor-container">
              <button
                type="button"
                className="guest-details-editor-btns"
                onClick={this.onClickAdultsMinusBtn}
              >
                -
              </button>
              <p className="guest-details-editor-counts">{adults}</p>
              <button
                type="button"
                className="guest-details-editor-btns"
                onClick={this.onClickAdultsPlusBtn}
              >
                +
              </button>
            </div>
          </div>
          <hr className="guest-details-input-feilds-seperator" />
          <div className="guest-details-input-feilds">
            <div className="guest-details-type-container">
              <p className="guest-details-type-name">Children</p>
              <p className="guest-details-type-desc">Age 2-12</p>
            </div>
            <div className="guest-details-editor-container">
              <button
                type="button"
                className="guest-details-editor-btns"
                onClick={this.onClickChildrenMinusBtn}
              >
                -
              </button>
              <p className="guest-details-editor-counts">{children}</p>
              <button
                type="button"
                className="guest-details-editor-btns"
                onClick={this.onClickChildrenPlusBtn}
              >
                +
              </button>
            </div>
          </div>
          <hr className="guest-details-input-feilds-seperator" />
          <div className="guest-details-input-feilds">
            <div className="guest-details-type-container">
              <p className="guest-details-type-name">Infants</p>
              <p className="guest-details-type-desc">Under 2</p>
            </div>
            <div className="guest-details-editor-container">
              <button
                type="button"
                className="guest-details-editor-btns"
                onClick={this.onClickInfantsMinusBtn}
              >
                -
              </button>
              <p className="guest-details-editor-counts">{infants}</p>
              <button
                type="button"
                className="guest-details-editor-btns"
                onClick={this.onClickInfantsPlusBtn}
              >
                +
              </button>
            </div>
          </div>
          <button
            className="guest-details-previous-btn guest-details-btn"
            type="button"
            onClick={this.onClickPreviousBtn}
          >
            Previous
          </button>
          <button
            className="guest-details-next-btn guest-details-btn"
            type="submit"
          >
            Next
          </button>
        </form>
      </div>
    )
  }
}

GuestDetailsForm.contextType = BookingContext
export default GuestDetailsForm
