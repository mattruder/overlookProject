class Customer {
  constructor(customerInfo) {
    this.id = customerInfo.id;
    this.name = customerInfo.name;
    this.bookings = [];
    this.totalSpent = 0;
  }

  getTotalSpent(rooms) {
    rooms.forEach((room) => {
      this.totalSpent += room.costPerNight;
    })
    return Number(this.totalSpent.toFixed(2))
  }

  getBookings(bookingsData){
    bookingsData.forEach((booking) => {
      if(this.id === booking.userID) {
        this.bookings.push(booking)
      }
    })

    return this.bookings
  }

}








export default Customer
