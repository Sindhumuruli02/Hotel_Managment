"use strict";
class HotelManagementSystem {
    constructor() {
        this.hotels = [];
        this.bookings = [];
    }
    addHotel(hotel) {
        this.hotels.push(hotel);
    }
    listHotels() {
        return this.hotels;
    }
    bookHotel(booking) {
        const hotel = this.hotels.find(h => h.id === booking.hotelId);
        if (hotel) {
            if (hotel.availability[booking.date]) {
                this.bookings.push(booking);
                hotel.availability[booking.date] = false; // Mark the date as unavailable
            }
            else {
                console.log('Hotel not available on this date');
            }
        }
        else {
            console.log('Hotel not found');
        }
    }
    listBookings() {
        return this.bookings;
    }
}
const system = new HotelManagementSystem();
system.addHotel({ id: 1, name: 'Sunrise Hotel', location: 'New York', availability: { '2024-08-10': true, '2024-08-11': true } });
system.addHotel({ id: 2, name: 'Ocean View', location: 'Miami', availability: { '2024-08-15': true, '2024-08-16': true } });
system.addHotel({ id: 3, name: 'Mountain Retreat', location: 'Denver', availability: { '2024-08-20': true, '2024-08-21': true } });
console.log(system.listHotels());
system.bookHotel({ id: 1, hotelId: 1, date: '2024-08-10', customerName: 'John Doe' });
system.bookHotel({ id: 2, hotelId: 2, date: '2024-08-15', customerName: 'Jane Smith' });
console.log(system.listBookings());
