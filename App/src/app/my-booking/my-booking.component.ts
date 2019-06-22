import { Component, OnInit } from '@angular/core';
import {BookingService} from '../services/booking.service'
import { FormControl } from '@angular/forms';
import {Booking} from '../shared/models/booking.model'
@Component({
  selector: 'app-my-booking',
  templateUrl: './my-booking.component.html',
  styleUrls: ['./my-booking.component.css']
})
export class MyBookingComponent implements OnInit {

  profileData:Booking[];
  checkIn=[];
  checkOut=[];

//mybooking:
// profileForm=new FormControl({
//      checkIn:Date
// })

  constructor(private booking:BookingService) { }

  ngOnInit() {
    //this.booking.getBooking(this.profileForm.value);
    this.booking.getBooking().subscribe((data=>{
      this.profileData=data;
      console.log(data);
    }))
    for(let x of this.profileData){
      const date=new Date();
      if(x.checkIn<date && x.checkOut<date){
        this.checkIn.push(x)
      }
      else{
        this.checkOut.push(x)
      }

    }
  }
  booknow(){
    alert("thank u for booking again!!!!")
  }
}
