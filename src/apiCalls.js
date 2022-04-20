let customers = `http://localhost:3001/api/v1/customers`
let rooms = `	http://localhost:3001/api/v1/rooms`
let bookings = `http://localhost:3001/api/v1/bookings`



const getData = () => {
    return Promise.all([
        fetchCustomerData(),
        fetchRoomsData(),
        fetchBookingsData()
    ])
}

const fetchCustomerData = () => {
    return fetch(customers)
    .then(response => response.json())
    .catch(err => console.log('ERROR'))
}

const fetchRoomsData = () => {
    return fetch(rooms)
    .then(response => response.json())
    .catch(err => console.log('ERROR'))
}

const fetchBookingsData = () => {
    return fetch(bookings)
    .then(response => response.json())
    .catch(err => console.log('ERROR'))
}

export default getData
