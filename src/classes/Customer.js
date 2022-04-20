class Customer {
  constructor(customerInfo) {
    this.id = customerInfo.id;
    this.name = customerInfo.name;
    this.bookings = [];
    this.rooms = [];
    this.totalSpent = 0;
  }

  getTotalSpent() {
    this.rooms.forEach((room) => {
      this.totalSpent += room.costPerNight;
    })

    this.totalSpent = Number(this.totalSpent.toFixed(2))

    return this.totalSpent
  }

  getBookings(bookingsData) {
    bookingsData.forEach((booking) => {
      if(this.id === booking.userID) {
        this.bookings.push(booking)
      }
    })
    return this.bookings
  }

  getRooms(roomsData) {
    this.bookings.forEach((booking) => {
      roomsData.forEach((room) => {
        if(booking.roomNumber === room.number) {
          this.rooms.push(room)
        }
      })
    })
    return this.rooms
  }

}








export default Customer
