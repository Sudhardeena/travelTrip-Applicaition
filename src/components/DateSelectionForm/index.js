import {Component} from 'react'
import {BsCalendar4Week} from 'react-icons/bs'
import './index.css'
import BookingContext from '../../context/BookingContext'

class DateSelectionForm extends Component {
  bookingContext = this.context

  state = {
    startDate: this.bookingContext.startDate,
    endDate: this.bookingContext.endDate,
    showStartDateErrMsg: false,
    showEndDateErrMsg: false,
    showEndDateCannotLessThanStartDateErrMsg: false,
  }

  handleChange = e => {
    const {name, value} = e.target
    console.log(value)
    console.log(typeof value)
    switch (name) {
      case 'startDate':
        this.setState({[name]: value, showStartDateErrMsg: false})
        break
      case 'endDate':
        this.setState({[name]: value, showEndDateErrMsg: false})
        break
      default:
        break
    }
  }

  handleSubmit = e => {
    e.preventDefault()
    const {startDate, endDate} = this.state
    if (startDate === '') {
      this.setState({showStartDateErrMsg: true})
    } else if (endDate === '') {
      this.setState({showEndDateErrMsg: true})
    } else {
      const bookingContext = this.context
      const {setStartDate, setEndDate, setActiveFormId} = bookingContext
      console.log(startDate, endDate)
      // const moditfiedStartDate = startDate
      //   .split('-')
      //   .reverse()
      //   .join(',')
      //   .replace(/,/g, '/')
      // const moditfiedDEndate = endDate
      //   .split('-')
      //   .reverse()
      //   .join(',')
      //   .replace(/,/g, '/')
      if (startDate > endDate) {
        this.setState({showEndDateCannotLessThanStartDateErrMsg: true})
      } else {
        setStartDate(startDate)
        setEndDate(endDate)
        setActiveFormId('GUESTS')
      }
    }
  }

  onClickPreviousBtn = () => {
    const bookingContext = this.context
    const {setActiveFormId} = bookingContext
    setActiveFormId('YOUR_DETAILS')
  }

  // formatDate = dateString => {
  //   if (!dateString) return ''
  //   const date = new Date(dateString)
  //   if (isNaN(date)) return ''
  //   const day = String(date.getDate()).padStart(2, '0')
  //   const month = String(date.getMonth() + 1).padStart(2, '0') // Months are zero-based
  //   const year = date.getFullYear() // Full year
  //   return `${day}/${month}/${year}` // Format as dd/mm/yyyy
  // }

  // {formattedDate && (
  //               <div className="formatted-date">{formattedDate}</div>
  //             )}

  render() {
    const {
      startDate,
      endDate,
      showStartDateErrMsg,
      showEndDateErrMsg,
      showEndDateCannotLessThanStartDateErrMsg,
    } = this.state
    // const formattedDate = this.formatDate(startDate)
    const startDateInputErrorViewClassName = showStartDateErrMsg
      ? 'date-selection-input-feilds-inputs-container-error-view'
      : ''
    const endDateInputErrorViewClassName = showEndDateErrMsg
      ? 'date-selection-input-feilds-inputs-container-error-view'
      : ''
    return (
      <div className="date-selection-form-container">
        <h1 className="date-selection-h1">Date Selection</h1>
        <p className="date-selection-desc">Select your Start and End Date.</p>
        <form className="date-selection-form" onSubmit={this.handleSubmit}>
          <div className="date-selection-input-feilds">
            <label
              className="date-selection-input-feilds-labels"
              htmlFor="dateSelectionStartDateInput"
            >
              Start Date
            </label>
            <div
              className={`date-selection-input-feilds-inputs-container ${startDateInputErrorViewClassName}`}
            >
              <input
                id="dateSelectionStartDateInput"
                className="date-selection-input-feilds-inputs"
                type="date"
                placeholder="dd/mm/yyyy"
                value={startDate}
                name="startDate"
                onChange={this.handleChange}
              />
              <BsCalendar4Week className="date-icon" />
            </div>
            {showStartDateErrMsg && (
              <p className="date-selection-error-mssg">Select start date</p>
            )}
          </div>
          <div className="date-selection-input-feilds">
            <label
              className="date-selection-input-feilds-labels"
              htmlFor="dateSelectionEndDateInput"
            >
              End Date
            </label>
            <div
              className={`date-selection-input-feilds-inputs-container ${endDateInputErrorViewClassName}`}
            >
              <input
                id="dateSelectionEndDateInput"
                className="date-selection-input-feilds-inputs"
                type="date"
                placeholder="dd/mm/yyyy"
                value={endDate}
                name="endDate"
                onChange={this.handleChange}
              />
              <BsCalendar4Week className="date-icon" />
            </div>
            {showEndDateErrMsg && (
              <p className="date-selection-error-mssg">Select end date</p>
            )}
            {showEndDateCannotLessThanStartDateErrMsg && (
              <p className="date-selection-error-mssg">
                The end date cannot be less than the start date
              </p>
            )}
          </div>
          <button
            className="date-selection-previous-btn date-selection-btn"
            type="button"
            onClick={this.onClickPreviousBtn}
          >
            Previous
          </button>
          <button
            className="date-selection-next-btn date-selection-btn"
            type="submit"
          >
            Next
          </button>
        </form>
      </div>
    )
  }
}

DateSelectionForm.contextType = BookingContext
export default DateSelectionForm
