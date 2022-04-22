class Customer {
  constructor(customerInfo) {
    this.id = customerInfo.id;
    this.name = customerInfo.name;
    this.bookings = [];
    this.rooms = [];
    this.totalSpent = 0;
  }

  getTotalSpent() {
    this.totalSpent = 0;
    this.rooms.forEach((room) => {
      this.totalSpent += room.costPerNight;
    })

    this.totalSpent = Number(this.totalSpent.toFixed(2))

    return this.totalSpent
  }

  getBookings(bookingsData) {
    this.bookings = []
    bookingsData.forEach((booking) => {
      if(this.id === booking.userID) {
        this.bookings.push(booking)
      }
    })
    return this.bookings
  }

  getRooms(roomsData) {
    this.rooms = []
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
