import {Component} from 'react'
import {MdOutlineErrorOutline} from 'react-icons/md'
import './index.css'
import BookingContext from '../../context/BookingContext'

class UserDetailsForm extends Component {
  bookingContext = this.context

  state = {
    name: this.bookingContext.name,
    startLocation: this.bookingContext.startLocation,
    endLocation: this.bookingContext.endLocation,
    showNameErrMsg: false,
    showStartLocationErrMsg: false,
    showEndtLocationErrMsg: false,
  }

  handleChange = e => {
    const {name, value} = e.target
    switch (name) {
      case 'name':
        this.setState({[name]: value, showNameErrMsg: false})
        break
      case 'startLocation':
        this.setState({[name]: value, showStartLocationErrMsg: false})
        break
      case 'endLocation':
        this.setState({[name]: value, showEndtLocationErrMsg: false})
        break
      default:
        break
    }
  }

  handleSubmit = e => {
    e.preventDefault()
    const {name, startLocation, endLocation} = this.state
    if (name === '') {
      this.setState({showNameErrMsg: true})
    } else if (startLocation === '') {
      this.setState({showStartLocationErrMsg: true})
    } else if (endLocation === '') {
      this.setState({showEndtLocationErrMsg: true})
    } else {
      const bookingContext = this.context
      const {
        setName,
        setStartLocation,
        setEndLocation,
        setActiveFormId,
      } = bookingContext
      setName(name)
      setStartLocation(startLocation)
      setEndLocation(endLocation)
      setActiveFormId('DATE_SELECTION')
    }
  }

  render() {
    const {
      name,
      startLocation,
      endLocation,
      showNameErrMsg,
      showStartLocationErrMsg,
      showEndtLocationErrMsg,
    } = this.state
    const nameInputErrorViewClassName = showNameErrMsg
      ? 'user-details-input-feilds-inputs-container-error-view'
      : ''
    const startLocationInputErrorViewClassName = showStartLocationErrMsg
      ? 'user-details-input-feilds-inputs-container-error-view'
      : ''
    const endLocationInputErrorViewClassName = showEndtLocationErrMsg
      ? 'user-details-input-feilds-inputs-container-error-view'
      : ''
    return (
      <div className="user-details-form-container">
        <h1 className="your-details-h1">Your Details</h1>
        <p className="your-details-desc">
          Enter your name and location details
        </p>
        <form className="user-details-form" onSubmit={this.handleSubmit}>
          <div className="user-details-input-feilds">
            <label
              className="user-details-input-feilds-labels"
              htmlFor="userDetailsNameInput"
            >
              Name
            </label>
            <div
              className={`user-details-input-feilds-inputs-container ${nameInputErrorViewClassName}`}
            >
              <input
                id="userDetailsNameInput"
                className="user-details-input-feilds-inputs"
                type="text"
                placeholder="Enter name"
                value={name}
                name="name"
                onChange={this.handleChange}
              />
              {showNameErrMsg && (
                <MdOutlineErrorOutline className="error-icon" />
              )}
            </div>
            {showNameErrMsg && (
              <p className="user-details-error-mssg">Enter your name</p>
            )}
          </div>
          <div className="user-details-input-feilds">
            <label
              className="user-details-input-feilds-labels"
              htmlFor="userDetailsStartLocationInput"
            >
              Start location
            </label>
            <div
              className={`user-details-input-feilds-inputs-container ${startLocationInputErrorViewClassName}`}
            >
              <input
                id="userDetailsStartLocationInput"
                className="user-details-input-feilds-inputs"
                type="text"
                placeholder="Enter start location"
                value={startLocation}
                name="startLocation"
                onChange={this.handleChange}
              />
              {showStartLocationErrMsg && (
                <MdOutlineErrorOutline className="error-icon" />
              )}
            </div>
            {showStartLocationErrMsg && (
              <p className="user-details-error-mssg">
                Enter your start location
              </p>
            )}
          </div>
          <div className="user-details-input-feilds">
            <label
              className="user-details-input-feilds-labels"
              htmlFor="userDetailsEndLocationInput"
            >
              End location
            </label>
            <div
              className={`user-details-input-feilds-inputs-container ${endLocationInputErrorViewClassName}`}
            >
              <input
                id="userDetailsEndLocationInput"
                className="user-details-input-feilds-inputs"
                type="text"
                placeholder="Enter end location"
                value={endLocation}
                name="endLocation"
                onChange={this.handleChange}
              />
              {showEndtLocationErrMsg && (
                <MdOutlineErrorOutline className="error-icon" />
              )}
            </div>
            {showEndtLocationErrMsg && (
              <p className="user-details-error-mssg">Enter your end location</p>
            )}
          </div>
          <button className="user-details-next-btn" type="submit">
            Next
          </button>
        </form>
      </div>
    )
  }
}

UserDetailsForm.contextType = BookingContext
export default UserDetailsForm
