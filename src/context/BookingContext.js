import React from 'react'

const BookingContext = React.createContext({
  name: '',
  startLocation: '',
  endLocation: '',
  startDate: '',
  endDate: '',
  guestsDetails: {
    adults: 1,
    children: 0,
    infants: 0,
  },
  travelAssistance: '',
  bookingInProgress: true,
  activeFormId: 'YOUR_DETAILS',
  myTripsList: [],
  setActiveFormId: () => {},
  setBookingInPreogress: () => {},
  setName: () => {},
  setStartLocation: () => {},
  setEndLocation: () => {},
  setStartDate: () => {},
  setEndDate: () => {},
  setGuestsDetails: () => {},
  setTravelAssistence: () => {},
  resetBooking: () => {},
  addTrip: () => {},
  removeTrip: () => {},
})

export default BookingContext
