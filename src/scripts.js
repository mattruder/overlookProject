import './css/styles.css';
import apiCalls from './apiCalls'
import getData from './apiCalls'
import './images/turing-logo.png'
import Customer from './classes/Customer'
import usernames from './usernames'
import domUpdates from './domUpdates.js'
import customerIndex from './domUpdates.js'
const myBookingsArea = document.querySelector('.my-bookings-area')
const totalSpentArea = document.querySelector('.total-spent-area')
const searchRoomsBtn = document.querySelector('.search-availability')
const roomSearchDisplay = document.querySelector('.room-search-display')
const goHomeBtn = document.querySelector('.go-home-btn')
const roomTypeDropdown = document.getElementById("room-type-dropdown")
const filterRoomsBtn = document.querySelector('.filter-rooms')
const bookRoomBtn = document.querySelector('.book-room-btn')
const availableRoomsArea = document.querySelector('.available-rooms')
const goHomeFromSuccess = document.querySelector('.go-home-from-success')
const loginButton = document.querySelector('.login-button')

let customerData;
let roomsData;
let bookingsData;
let customer;


getData().then(data => {
  customerData = data[0].customers;
  roomsData = data[1].rooms;
  bookingsData = data[2].bookings;
})

loginButton.addEventListener("click", () => {
  domUpdates.userLogin(customerData)
  let customerIndex = domUpdates.getCustomerIndex()
  if(domUpdates.validateUser() === true) {
    domUpdates.goHome()
    getData().then(data => {
      roomsData = data[1].rooms;
      bookingsData = data[2].bookings;
      customer = new Customer(customerData[customerIndex])
      customer.getBookings(bookingsData)
      customer.getRooms(roomsData)
      customer.getTotalSpent()
      domUpdates.populateHeader(customer)
      domUpdates.populateTotalSpentArea(customer)
      domUpdates.displayPastBookings(customer, roomsData)
      domUpdates.displayFutureBookings(customer, roomsData)
      domUpdates.setDateSelection()
    })
  }
})

searchRoomsBtn.addEventListener("click", () => {
  getData().then(data => {
    roomsData = data[1].rooms;
    bookingsData = data[2].bookings;
    customer.getBookings(bookingsData)
    customer.getRooms(roomsData)
    customer.getTotalSpent()
    domUpdates.populateTotalSpentArea(customer)
    domUpdates.displayPastBookings(customer, roomsData)
    domUpdates.displayFutureBookings(customer, roomsData)
  })
  domUpdates.displayResultsArea()
  domUpdates.displaySearchResults(roomsData, bookingsData)
});

goHomeBtn.addEventListener("click", () => {
  domUpdates.goHome()
  getData().then(data => {
    roomsData = data[1].rooms;
    bookingsData = data[2].bookings;
    customer.getBookings(bookingsData)
    customer.getRooms(roomsData)
    customer.getTotalSpent()
    domUpdates.populateTotalSpentArea(customer)
    domUpdates.displayPastBookings(customer, roomsData)
    domUpdates.displayFutureBookings(customer, roomsData)
    domUpdates.setDateSelection()
  })

})

filterRoomsBtn.addEventListener("click", () => {
  domUpdates.filterRooms(roomsData, bookingsData)
})

availableRoomsArea.addEventListener("click", (event) => {
  domUpdates.bookThisRoom(event, roomsData, customer)
  domUpdates.displaySuccessMessage()
})

goHomeFromSuccess.addEventListener("click", () => {
  domUpdates.goHome()
  getData().then(data => {
    roomsData = data[1].rooms;
    bookingsData = data[2].bookings;
    customer.getBookings(bookingsData)
    customer.getRooms(roomsData)
    customer.getTotalSpent()
    domUpdates.populateTotalSpentArea(customer)
    domUpdates.displayPastBookings(customer, roomsData)
    domUpdates.displayFutureBookings(customer, roomsData)
    domUpdates.setDateSelection()
  })
})
