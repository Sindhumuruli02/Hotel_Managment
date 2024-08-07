"use strict";
// interface Hotel {
//     id: number;
//     name: string;
//     location: string;
//     availability: { [date: string]: boolean }; 
// }
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
            if (hotel.availability.get(booking.date)) {
                this.bookings.push(booking);
                hotel.availability.set(booking.date, false);
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
system.addHotel({ id: 1, name: 'Sunrise Hotel', location: 'New York', availability: new Map([[new Date('2024-08-10'), true], [new Date('2024-08-11'), true]]) });
system.addHotel({ id: 2, name: 'Ocean View', location: 'Miami', availability: new Map([[new Date('2024-08-15'), true], [new Date('2024-08-16'), true]]) });
system.addHotel({ id: 3, name: 'Mountain Retreat', location: 'Denver', availability: new Map([[new Date('2024-08-20'), true], [new Date('2024-08-21'), true]]) });
console.log(system.listHotels());
system.bookHotel({ id: 1, hotelId: 1, date: new Date('2024-08-10'), customerName: 'John Doe' });
system.bookHotel({ id: 2, hotelId: 2, date: new Date('2024-08-15'), customerName: 'Jane Smith' });
console.log(system.listBookings());
