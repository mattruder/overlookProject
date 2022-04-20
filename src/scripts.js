// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/styles.css';
import apiCalls from './apiCalls'
import getData from './apiCalls'
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
import Customer from './classes/Customer'

let customerData;
let roomsData;
let bookingsData;
let customer;

getData().then(data => {
  customerData = data[0].customers;
  roomsData = data[1].rooms;
  bookingsData = data[2].bookings;
  customer = new Customer(customerData[0])
  customer.getBookings(bookingsData)
  console.log("customer data ", customerData)
  console.log("rooms data ", roomsData)
  console.log("bookings data ", bookingsData)
  console.log(customer)

})
