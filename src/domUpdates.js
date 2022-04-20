import Customer from './classes/Customer'
const myBookingsArea = document.querySelector('.my-bookings-area')
const totalSpentArea = document.querySelector('.total-spent-area')
const headerLeft = document.querySelector('.header-left')
const pastBookings = document.querySelector('.past-bookings')
const dateSelection = document.getElementById("date-selection")

let domUpdates = {

  getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
  },

  populateTotalSpentArea(customer) {
    totalSpentArea.innerHTML += `
    <h3>You have spent $${customer.totalSpent} at Overlook Hotel</h3>
    <p>Thank you for being a valued customer!</p>
    `
  },

  populateHeader(customer) {
    headerLeft.innerHTML += `
    <h1>Overlook Hotel</h1>
    <p>Welcome, ${customer.name}!</p>
    `
  },

  sortBookings(customer, roomsData) {

  },

  displayPastBookings(customer, roomsData) {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    today = yyyy + '/' + mm + '/' + dd;
    let bookingArray = []
    customer.bookings.forEach((booking) => {
      roomsData.forEach((room) => {
        if(booking.roomNumber === room.number && booking.date < today) {
          let bookingObject = {
            roomNumber: room.number,
            date: new Date(booking.date),
            roomType: room.roomType,
            bedSize: room.bedSize,
            numBeds: room.numBeds,
            cost: room.costPerNight
          }
          bookingArray.push(bookingObject)
        }
      })
    })
    let bookingArraySorted = bookingArray.slice().sort((a, b) => {
      return b.date - a.date
    })
    bookingArraySorted.forEach((sortedBooking) => {
      pastBookings.innerHTML += `
      <div class="booking">
        <h3>Room ${sortedBooking.roomNumber} on ${sortedBooking.date.toDateString()}</h3>
        <p>Room Type: ${sortedBooking.roomType}</p>
        <p>Bed Size: ${sortedBooking.bedSize}</p>
        <p>Beds: ${sortedBooking.numBeds}</p>
        <p>Cost Per Night: ${sortedBooking.cost}</p>
      </div>
      `
    })
  },

  setDateSelection() {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    today = `${yyyy}-${mm}-${dd}`;
    dateSelection.min = today
  }







}










export default domUpdates
