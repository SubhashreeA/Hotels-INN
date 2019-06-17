import {Review} from './review.model';
import {Booking} from './booking.model';
import { User } from './user.model';

export class Establishments {
    id:number;
    name:string;
    type:string;
    price:number;
    location:string;
    city:string;
    capacity:number;
    isBlock:boolean;
    averageRating:number;
    reviews:Review[];
    bookingList:Booking[];
    amenities:string[];
    owner: User;

}
