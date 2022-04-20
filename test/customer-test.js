import chai from 'chai';
const expect = chai.expect;
import Customer from '../src/classes/Customer';

describe ('Customer', () => {
  let customer;
  let customerInfo;
  let customerBookings;
  let rooms;

  beforeEach(() => {
    customerInfo = {id: 1, name: 'Leatha Ullrich'}
    customerBookings = [
      {id: '5fwrgu4i7k55hl6t8', userID: 1, date: '2022/02/05', roomNumber: 12},
      {id: '5fwrgu4i7k55hl6x8', userID: 1, date: '2022/01/11', roomNumber: 20},
      {id: '5fwrgu4i7k55hl727', userID: 1, date: '2022/01/20', roomNumber: 22}
    ]
    rooms = [{bedSize: "twin",
              bidet: false,
              costPerNight: 172.09,
              numBeds: 2,
              number: 12,
              roomType: "single room"},
              {bedSize: "queen",
                bidet: false,
                costPerNight: 343.95,
                numBeds: 1,
                number: 20,
                roomType: "residential suite"},
              {bedSize: "full",
                bidet: false,
                costPerNight: 350.31,
                numBeds: 2,
                number: 22,
                roomType: "single room"}
            ]
    customer = new Customer(customerInfo, customerBookings);
  })

  it('Should be a function', () => {
        expect(Customer).to.be.a('function');
      });
  it('A customer should have an ID', () => {
        expect(customer.id).to.equal(1);
      });

  it('A customer should have a name', () => {
        expect(customer.name).to.equal('Leatha Ullrich');
      });

  it('Should store the customers bookings', () => {
        expect(customer.bookings).to.equal(customerBookings);
      });

  it('Should be able to display the total amount the customer has spent', () => {
        expect(customer.getTotalSpent(rooms)).to.equal(866.35);
      });

  // it('Should be able to book a room', () => {
  //       expect(customer.getTotalSpent(rooms)).to.equal(866.35);
  //     });






})
