// import { hello } from "./index";

// let message:string = hello("sindhu");

// console.log(message);

// class Person{
//          public name : string;
          
//          constructor(name: string){
//            this.name = name;

//          }

//          public greet() {
//             console.log(`hello, my name is ${this.name}.`);

//          }
//          }
//   const person1 = new Person(`Alice`);
//   console.log(person1.name);
//   person1.greet();

interface Hotel {
    id: number;
    name: string;
    location: string;
}

interface Booking {
    id: number;
    hotelId: number;
    date: string;
    customerName: string;
}


class HotelManagementSystem {
    private hotels: Hotel[] = [];
    private bookings: Booking[] = [];

    addHotel(hotel: Hotel): void {
        this.hotels.push(hotel);
    }

    listHotels(): Hotel[] {
        return this.hotels;
    }

    bookHotel(booking: Booking): void {
        const hotel = this.hotels.find(h => h.id === booking.hotelId);
        if (hotel) {
            this.bookings.push(booking);
        } else {
            console.log('Hotel not found');
        }
    }

    listBookings(): Booking[] {
        return this.bookings;
    }
}


const system = new HotelManagementSystem();

system.addHotel({ id: 1, name: 'Sunrise Hotel', location: 'New York' });
system.addHotel({ id: 2, name: 'Ocean View', location: 'Miami' });
system.addHotel({ id: 3, name: 'Mountain Retreat', location: 'Denver' });

console.log(system.listHotels());

system.bookHotel({ id: 1, hotelId: 1, date: '2024-08-10', customerName: 'John Doe' });
system.bookHotel({ id: 2, hotelId: 2, date: '2024-08-15', customerName: 'Jane Smith' });

console.log(system.listBookings());
