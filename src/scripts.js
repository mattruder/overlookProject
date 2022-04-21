// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/styles.css';
import apiCalls from './apiCalls'
import getData from './apiCalls'
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
import Customer from './classes/Customer'
import domUpdates from './domUpdates.js'
const myBookingsArea = document.querySelector('.my-bookings-area')
const totalSpentArea = document.querySelector('.total-spent-area')
const searchRoomsBtn = document.querySelector('.search-availability')
const roomSearchDisplay = document.querySelector('.room-search-display')
const goHomeBtn = document.querySelector('.go-home-btn')
const roomTypeDropdown = document.getElementById("room-type-dropdown")
const filterRoomsBtn = document.querySelector('.filter-rooms')


let customerData;
let roomsData;
let bookingsData;
let customer;

getData().then(data => {
  customerData = data[0].customers;
  roomsData = data[1].rooms;
  bookingsData = data[2].bookings;
  customer = new Customer(customerData[domUpdates.getRandomIndex(customerData)])
  customer.getBookings(bookingsData)
  customer.getRooms(roomsData)
  customer.getTotalSpent()
  domUpdates.populateTotalSpentArea(customer)
  domUpdates.populateHeader(customer)
  domUpdates.displayPastBookings(customer, roomsData)
  domUpdates.setDateSelection()
  console.log("customer data ", customerData)
  console.log("rooms data ", roomsData)
  console.log("bookings data ", bookingsData)
  console.log(customer)
})

searchRoomsBtn.addEventListener("click", () => {
  domUpdates.displayResultsArea()
  domUpdates.displaySearchResults(roomsData, bookingsData)
});

goHomeBtn.addEventListener("click", () => {
  domUpdates.goHome()
})

filterRoomsBtn.addEventListener("click", () => {
  domUpdates.filterRooms(roomsData, bookingsData)
})
