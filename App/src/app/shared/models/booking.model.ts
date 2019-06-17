import { User } from "./user.model";
import { Establishments } from "./establish.model";

export class Booking {
    bookedBy:User;
    establishment:Establishments[];
    checkIn:Date;
    checkOut:Date;
    noOfPerson:number;
}
