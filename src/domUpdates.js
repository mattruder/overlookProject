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
const futureBookingsArea = document.querySelector('.future-bookings')

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
    let mm = String(today.getMonth() + 1).padStart(2, '0');
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

  displayFutureBookings(customer, roomsData) {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();
    today = yyyy + '/' + mm + '/' + dd;
    let bookingArray = []
    customer.bookings.forEach((booking) => {
      roomsData.forEach((room) => {
        if(booking.roomNumber === room.number && booking.date >= today) {
          futureBookingsArea.style.alignItems = 'baseline';
          futureBookingsArea.style.justifyContent = 'flex-start'
          futureBookingsArea.innerHTML = ""
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
      return a.date - b.date
    })
    bookingArraySorted.forEach((sortedBooking) => {
      futureBookingsArea.innerHTML += `
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
    let searchDate = dateSelection.value.replaceAll('-', '/')
    roomsData.forEach((room) => {
      let roomInfoObject = {}

          let isBooked = bookingsData.find((booking) => {
            return booking.date === searchDate && booking.roomNumber === room.number
          })

          if(!isBooked) {
            roomInfoObject['roomNumber'] = room.number
            roomInfoObject['roomType'] = room.roomType
            roomInfoObject['bedSize'] = room.bedSize
            roomInfoObject['cost'] = room.costPerNight
            roomInfoObject['numBeds'] = room.numBeds
          }

      if(roomInfoObject['roomNumber'] !== undefined) {
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

  filterRooms(roomsData, bookingsData) {
    availableRoomsArea.innerHTML = ''
    let searchDate = dateSelection.value.replaceAll('-', '/')
    let filterValue = roomTypeDropdown.value
    roomsData.forEach((room) => {
      let roomInfoObject = {}

      let isBooked = bookingsData.find((booking) => {
        return booking.date === searchDate && booking.roomNumber === room.number
      })

      if(!isBooked && room.roomType === filterValue) {
        roomInfoObject['roomNumber'] = room.number
        roomInfoObject['roomType'] = room.roomType
        roomInfoObject['bedSize'] = room.bedSize
        roomInfoObject['cost'] = room.costPerNight
        roomInfoObject['numBeds'] = room.numBeds
      } else if(!isBooked && filterValue === "all") {
        roomInfoObject['roomNumber'] = room.number
        roomInfoObject['roomType'] = room.roomType
        roomInfoObject['bedSize'] = room.bedSize
        roomInfoObject['cost'] = room.costPerNight
        roomInfoObject['numBeds'] = room.numBeds
      }


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

  bookThisRoom(event, roomsData, customer) {
    let searchDate = dateSelection.value.replaceAll('-', '/')
    roomsData.forEach((room) => {
      if(room.number.toString() === event.target.id.toString()) {
      let roomBooking = { "userID": customer.id, "date": searchDate.toString(), "roomNumber": room.number}
      this.bookRoom(roomBooking)
      }
    })
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
},

bookRoom(roomToBook) {
    fetch(`http://localhost:3001/api/v1/bookings`, {
        method: 'POST',
        body: JSON.stringify(roomToBook),
        headers: {
            'Content-Type' : 'application/json'
        }
    })
    .then(response => response.json())
    .catch(err => console.log('ERROR'))
}

}










export default domUpdates
