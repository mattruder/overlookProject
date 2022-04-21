import Customer from './classes/Customer'
const myBookingsArea = document.querySelector('.my-bookings-area')
const totalSpentArea = document.querySelector('.total-spent-area')
const headerLeft = document.querySelector('.header-left')
const pastBookings = document.querySelector('.past-bookings')
const dateSelection = document.getElementById("date-selection")
const roomSearchDisplay = document.querySelector('.room-search-display')
const mainDashboardBody = document.querySelector('.main-dashboard-body')
const availableRoomsArea = document.querySelector('.available-rooms')
const roomTypeDropdown = document.getElementById("room-type-dropdown")

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
    <p>Welcome, ${customer.name}!</p>
    `
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
        <p>Cost Per Night: $${sortedBooking.cost}</p>
      </div>
      `
    })
  },

  setDateSelection() {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();
    today = `${yyyy}-${mm}-${dd}`;
    dateSelection.min = today
    dateSelection.value = today
  },

  displayResultsArea() {
    this.addHidden([mainDashboardBody]);
    this.removeHidden([roomSearchDisplay])
  },

  displaySearchResults(roomsData, bookingsData) {
    availableRoomsArea.innerHTML = ''
    let searchDate = new Date(dateSelection.value)
    let dd = String(searchDate.getDate()).padStart(2, '0');
    let mm = String(searchDate.getMonth() + 1).padStart(2, '0');
    let yyyy = searchDate.getFullYear();
    searchDate = `${yyyy}/${mm}/${dd}`;
    roomsData.forEach((room) => {
      let roomInfoObject = {}
      bookingsData.forEach((booking) => {

        if(booking.roomNumber === room.number && searchDate !== booking.date) {
          roomInfoObject['roomNumber'] = room.number
          roomInfoObject['roomType'] = room.roomType
          roomInfoObject['bedSize'] = room.bedSize
          roomInfoObject['cost'] = room.costPerNight
          roomInfoObject['numBeds'] = room.numBeds
        }
      })
      availableRoomsArea.innerHTML += `
      <h3>Room ${roomInfoObject['roomNumber']}</h3>
      <p>Room Type: ${roomInfoObject['roomType']}</p>
      <p>Bed Size: ${roomInfoObject['bedSize']}</p>
      <p>Beds: ${roomInfoObject['numBeds']}</p>
      <p>Cost Per Night: ${roomInfoObject['cost']}</p>
      <button class="book-room-btn" id=${roomInfoObject['roomNumber']}>Book Room ${roomInfoObject['roomNumber']}</button>
      `
    })
  },

  filterRooms(roomsData, bookingsData) {
    availableRoomsArea.innerHTML = ''
    let searchDate = new Date(dateSelection.value)
    let dd = String(searchDate.getDate()).padStart(2, '0');
    let mm = String(searchDate.getMonth() + 1).padStart(2, '0');
    let yyyy = searchDate.getFullYear();
    searchDate = `${yyyy}/${mm}/${dd}`;
    let filterValue = roomTypeDropdown.value
    roomsData.forEach((room) => {
      let roomInfoObject = {}
      bookingsData.forEach((booking) => {

        if(booking.roomNumber === room.number && searchDate !== booking.date) {
          if(room.roomType === filterValue) {
          roomInfoObject['roomNumber'] = room.number
          roomInfoObject['roomType'] = room.roomType
          roomInfoObject['bedSize'] = room.bedSize
          roomInfoObject['cost'] = room.costPerNight
          roomInfoObject['numBeds'] = room.numBeds
        } else if(filterValue === "all") {
          roomInfoObject['roomNumber'] = room.number
          roomInfoObject['roomType'] = room.roomType
          roomInfoObject['bedSize'] = room.bedSize
          roomInfoObject['cost'] = room.costPerNight
          roomInfoObject['numBeds'] = room.numBeds
        }
        }
      })
      if(roomInfoObject['roomType'] !== undefined) {
      availableRoomsArea.innerHTML += `
      <h3>Room ${roomInfoObject['roomNumber']}</h3>
      <p>Room Type: ${roomInfoObject['roomType']}</p>
      <p>Bed Size: ${roomInfoObject['bedSize']}</p>
      <p>Beds: ${roomInfoObject['numBeds']}</p>
      <p>Cost Per Night: ${roomInfoObject['cost']}</p>
      <button class="book-room-btn" id=${roomInfoObject['roomNumber']}>Book Room ${roomInfoObject['roomNumber']}</button>
      `
    }
    })
  },

  displayFilteredRooms() {

  },

  goHome() {
    this.removeHidden([mainDashboardBody]);
    this.addHidden([roomSearchDisplay])
    this.setDateSelection()
  },

  removeHidden(array) {
  array.forEach((element) => {
    element.classList.remove("hidden")
  })
},

  addHidden(array) {
  array.forEach((element) => {
    element.classList.add("hidden")
  })
}

}










export default domUpdates
