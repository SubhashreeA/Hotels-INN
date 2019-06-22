import { Injectable } from '@angular/core';
import { Booking } from '../shared/models/booking.model';
import { User } from '../shared/models/user.model';
import { Establishments } from '../shared/models/establish.model';
import { of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BookingService {
bookings:Booking[]=[{ bookedBy:new User('subhashree'),establishment:new Establishments('leelaplace',4,5000),checkIn:new Date('6/06/2019'),checkOut:new Date('06/08/2019'),noOfPerson:(2),price:(2000)},
{  bookedBy:new User('Roshni'),establishment:new Establishments('hyderabad',4,5000),checkIn:new Date('07/07/2019'),checkOut:new Date('07/10/2019'),noOfPerson:(2),price:3000},
{   bookedBy:new User('Namaratha'),establishment:new Establishments('mysore',2,2500),checkIn:new Date('06/25/2019'),checkOut:new Date('06/28/2019'),noOfPerson:(4),price:(4000)}, 
{ bookedBy:new User('Shalini'),establishment:new Establishments('chennai',5,7500),checkIn:new Date('05/18/2019'),checkOut:new Date('05/22/2019'),noOfPerson:(2),price:(5000)},
]
  constructor() { }
  getBooking(){
  //  console.log(this.bookings);
   return of(this.bookings);
  }
}
