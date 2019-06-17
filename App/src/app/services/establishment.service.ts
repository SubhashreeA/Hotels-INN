import { Injectable } from '@angular/core';
import { Establishments } from '../shared/models/establish.model'
import { User} from '../shared/models/user.model';
import { Observable, of, from, Subject } from 'rxjs';
import {HotelFilterComponent} from '../Booking/hotel-filter/hotel-filter.component'
@Injectable({
  providedIn: 'root'
})
export class EstablishmentService {
  establishments : Establishments[]= [
    { id: 1, name: "Hotel Grand", type: "hotel", location: "Egmore", city: "Chennai", capacity: 2 , price: 5000, isBlock: false, averageRating: 4.2, reviews: [],bookingList: [],amenities: [ "Car parking", "First Aid" , "Wi-fi"], owner: new User() },
    { id: 2, name: "Hotel Taj", type: "hotel", location: "Guindy", city: "Chennai", capacity: 1 , price: 6000, isBlock: false, averageRating: 4.4, reviews: [],bookingList: [],amenities: [ "Car parking", "First Aid" , "Air-conditioned"], owner: new User() },
    { id: 3, name: "Hotel Trident", type: "hotel", location: "Adayar", city: "Chennai", capacity: 3 , price: 5500, isBlock: false, averageRating: 3.0, reviews: [],bookingList: [],amenities: [ "Car parking", "First Aid" , "Wi-fi"], owner: new User() },
    { id: 4, name: "Park Plaza", type: "hotel", location: "Adayar", city: "Chennai", capacity: 2 , price: 4000, isBlock: false, averageRating: 2.5, reviews: [],bookingList: [],amenities: [ "Air-conditioned", "First Aid" , "Wi-fi"], owner: new User() },
    { id: 5, name: "Le Meridien", type: "hotel", location: "Mylapore", city: "Chennai", capacity: 1 , price: 7500, isBlock: false, averageRating: 4.7, reviews: [],bookingList: [],amenities: [ "Car parking", "Air-conditioned"], owner: new User() },
    { id: 6, name: "Oberois Hotels", type: "hotel", location: "Egmore", city: "Chennai", capacity: 2 , price: 7000, isBlock: false, averageRating: 4.8, reviews: [],bookingList: [],amenities: [ "Car parking", "Air-conditioned" , "Wi-fi"], owner: new User() },
    { id: 7, name: "Lovely Homes", type: "homestay", location: "Mylapore", city: "Chennai", capacity: 1 , price: 2500, isBlock: false, averageRating: 5.0, reviews: [],bookingList: [],amenities: [ "Car parking", "Wi-fi"], owner: new User() },
    { id: 8, name: "Paradise Inn", type: "homestay", location: "Egmore", city: "Chennai", capacity: 2 , price: 3000, isBlock: false, averageRating: 4.8, reviews: [],bookingList: [],amenities: [ "Car parking", "First Aid" , "Wi-fi"], owner: new User() },
    { id: 9, name: "Green city", type: "homestay", location: "Adayar", city: "Chennai", capacity: 2 , price: 1500, isBlock: false, averageRating: 4.9, reviews: [],bookingList: [],amenities: [ "Car parking"], owner: new User() }
    ]
  filterSubject=new Subject<Establishments[]>();

  constructor() { }
  getEstablish(){
    this.filterSubject.next(this.establishments.slice())
  }
  
  getFilter(formData){
    let filterData=[];
    filterData=this.establishments.filter(data=>data.price>=formData.priceMin);
    if(formData.hotelName!=="")
      filterData = filterData.filter(data=>data.name===formData.hotelName);
      // console.log(filterData);
      filterData = filterData.filter(data=>data.averageRating>=formData.averageRating);
      // console.log(filterData);
    if(!formData.hotel)
      filterData = filterData.filter(data => data.type==='hotel' ? false: true);
      // console.log(filterData);
    if(!formData.roomstay)
      filterData = filterData.filter(data => data.type==='homestay' ? false: true);
    console.log(formData);
    // console.log(filterData);
     this.filterSubject.next(filterData);
  }
//  getSearch():Observable<Establishments[]>{
//     this.establishments
//  }
}
