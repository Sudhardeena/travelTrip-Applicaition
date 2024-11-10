import {Component} from 'react'
import './index.css'
import BookingContext from '../../context/BookingContext'

const travelAssistanceList = [
  {value: 'car', displayText: 'Car'},
  {value: 'flight', displayText: 'Flight'},
  {value: 'bus', displayText: 'Bus'},
  {value: 'train', displayText: 'Train'},
]

class TravelAssistanceForm extends Component {
  bookingContext = this.context

  state = {
    travelAssistanceCheckedStatus: this.bookingContext.travelAssistance !== '',
    selectedVehicle: {},
  }

  componentDidMount() {
    this.setState({selectedVehicle: this.previouslySelectedOption()})
  }

  previouslySelectedOption = () => {
    const {travelAssistance} = this.bookingContext
    if (travelAssistance === '') {
      return {value: 'car', displayText: 'Car'}
    }
    const selectedVehicle = travelAssistanceList.find(
      each => each.displayText === travelAssistance,
    )
    console.log(travelAssistance)
    return selectedVehicle
  }

  onClickCheckbox = () =>
    this.setState(prevState => {
      const bookingContext = this.context
      const {setTravelAssistence} = bookingContext
      if (prevState.travelAssistanceCheckedStatus) {
        this.setState({travelAssistanceCheckedStatus: false})
        setTravelAssistence('')
      } else {
        this.setState({travelAssistanceCheckedStatus: true})
        setTravelAssistence('Car')
      }
    })

  onClickOptions = event => {
    const bookingContext = this.context
    const {setTravelAssistence} = bookingContext
    const selectedVehicle = travelAssistanceList.find(
      each => each.value === event.target.value,
    )
    this.setState(
      {
        selectedVehicle: {
          value: selectedVehicle.value,
          displayText: selectedVehicle.displayText,
        },
      },
      () => setTravelAssistence(selectedVehicle.displayText),
    )
  }

  handleSubmit = e => {
    e.preventDefault()
    const bookingContext = this.context
    const {setActiveFormId} = bookingContext
    setActiveFormId('CONFIRMATION')
  }

  onClickPreviousBtn = () => {
    const bookingContext = this.context
    const {setActiveFormId} = bookingContext
    setActiveFormId('GUESTS')
  }

  render() {
    const {travelAssistanceCheckedStatus, selectedVehicle} = this.state

    return (
      <div className="travel-assistance-form-container">
        <h1 className="travel-assistance-h1">Travel Assistance</h1>
        <p className="travel-assistance-desc">Select your Travel Assistance.</p>
        <form className="travel-assistance-form" onSubmit={this.handleSubmit}>
          <div className="travel-assistance-checkbox-container">
            <input
              type="checkbox"
              id="travelAssitanceCheckbox"
              checked={travelAssistanceCheckedStatus}
              onClick={this.onClickCheckbox}
              className="travel-assistance-checkbox"
            />
            <label
              className="travel-assistance-input-feilds-labels"
              htmlFor="travelAssitanceCheckbox"
            >
              Travel Assistance Needed
            </label>
          </div>
          {travelAssistanceCheckedStatus && (
            <div className="travel-assistance-select-input-feilds-container">
              <label
                className="travel-assistance-input-feilds-labels"
                htmlFor="vehicles"
              >
                Travel Assistance
              </label>
              <select
                className="travel-assistance-select-input-feild"
                name="vehicles"
                id="vehicles"
                value={selectedVehicle.value}
                onChange={this.onClickOptions}
              >
                {travelAssistanceList.map(each => (
                  <option
                    key={each.value}
                    className="option-item"
                    name={each.displayText}
                    value={each.value}
                  >
                    {each.displayText}
                  </option>
                ))}
              </select>
            </div>
          )}
          <button
            className="travel-assistance-previous-btn travel-assistance-btn"
            type="button"
            onClick={this.onClickPreviousBtn}
          >
            Previous
          </button>
          <button
            className="travel-assistance-next-btn travel-assistance-btn"
            type="submit"
          >
            Next
          </button>
        </form>
      </div>
    )
  }
}

TravelAssistanceForm.contextType = BookingContext
export default TravelAssistanceForm
