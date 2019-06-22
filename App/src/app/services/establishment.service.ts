import { Injectable } from '@angular/core';
import { Establishments } from '../shared/models/establish.model';
import { User} from '../shared/models/user.model';
import { Observable, of, from, Subject } from 'rxjs';
import {HotelFilterComponent} from '../Booking/hotel-filter/hotel-filter.component';
import { Review } from '../shared/models/review.model';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EstablishmentService {
  valueDisplay = {};
  singleItem: any;
  temp: Establishments[];
  // reviews: Review[]= [
  // { id: 1, rating: 4, reviewedBy: new User('Subha'), establishment: new Establishments(), reviewContent: 'The hostel was very well maintained and environment was so...'},
  // { id: 2, rating: 3, reviewedBy: new User('acharya'), establishment: new Establishments(), reviewContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id leo velit. Proin in enim ante. Duis ornare pharetra nisl in rutrum. Pellentesque convallis feugiat libero, et placerat lectus bibendum ac. Donec a dui libero. In sit amet efficitur turpis. Nunc non magna a eros ullamcorper facilisis.'},
  // { id: 3, rating: 2, reviewedBy: new User('Subhra'), establishment: new Establishments(), reviewContent: 'Duis egestas pharetra turpis, ut venenatis nisl pretium at. Proin egestas placerat posuere. Praesent laoreet libero id nisi aliquam viverra. Etiam consequat sapien erat. Aenean suscipit laoreet quam nec auctor.“The hostel was very well maintained and environment was so...'}
  // ];
  establishments: Establishments[] = [];
  // { id: 1, name: 'Hotel Trident', type: 'hotel', location: 'Adayar', city: 'Chennai', capacity: 3 , price: 5500, isBlock: false, averageRating: 3.0, reviews: this.reviews, bookingList: [], amenities: [ 'Car parking', 'First Aid' , 'Wi-fi'], owner: new User('Rajawat') },
  // { id: 2, name: 'Hotel Trident', type: 'hotel', location: 'Adayar', city: 'Chennai', capacity: 3 , price: 5500, isBlock: false, averageRating: 3.0, reviews: this.reviews, bookingList: [], amenities: [ 'Car parking', 'First Aid' , 'Wi-fi'], owner: new User('Rajawat') },
  // { id: 3, name: 'Hotel Trident', type: 'hotel', location: 'Adayar', city: 'Chennai', capacity: 3 , price: 5500, isBlock: false, averageRating: 3.0, reviews: this.reviews, bookingList: [], amenities: [ 'Car parking', 'First Aid' , 'Wi-fi'], owner: new User("Rajawat") },
  // { id: 4, name: 'Park Plaza', type: 'hotel', location: 'Adayar', city: 'Chennai', capacity: 2 , price: 4000, isBlock: false, averageRating: 2.5, reviews: this.reviews, bookingList: [], amenities: [ 'Air-conditioned', 'First Aid' , 'Wi-fi'], owner: new User('') },
  // { id: 5, name: 'Le Meridien', type: 'hotel', location: 'Mylapore', city: 'Chennai', capacity: 1 , price: 7500, isBlock: false, averageRating: 4.7, reviews: this.reviews, bookingList: [], amenities: [ 'Car parking', 'Air-conditioned'], owner: new User('') },
  // { id: 6, name: 'Oberois Hotels', type: 'hotel', location: 'Egmore', city: 'Chennai', capacity: 2 , price: 7000, isBlock: false, averageRating: 4.8, reviews: this.reviews, bookingList: [], amenities: [ 'Car parking', 'Air-conditioned' , 'Wi-fi'], owner: new User('') },
  // { id: 7, name: 'Lovely Homes', type: 'homestay', location: 'Mylapore', city: 'Chennai', capacity: 1 , price: 2500, isBlock: false, averageRating: 5.0, reviews: this.reviews, bookingList: [], amenities: [ 'Car parking', 'Wi-fi'], owner: new User('') },
  // { id: 8, name: 'Paradise Inn', type: 'homestay', location: 'Egmore', city: 'Chennai', capacity: 2 , price: 3000, isBlock: false, averageRating: 4.8, reviews: this.reviews, bookingList: [], amenities: [ 'Car parking', 'First Aid' , 'Wi-fi'], owner: new User('') },
  // { id: 9, name: 'Green city', type: 'homestay', location: 'Adayar', city: 'Chennai', capacity: 2 , price: 1500, isBlock: false, averageRating: 4.9, reviews: this.reviews, bookingList: [], amenities: [ 'Car parking'], owner: new User('') },
  // { id: 10, name: 'Oberois Hotels', type: 'hotel', location: 'Egmore', city: 'Bhubaneswar', capacity: 4 , price: 7000, isBlock: false, averageRating: 4.8, reviews: this.reviews, bookingList: [], amenities: [ 'Car parking', 'Air-conditioned' , 'Wi-fi'], owner: new User('') },
  // { id: 11, name: 'Lovely Homes', type: 'homestay', location: 'Mylapore', city: 'cuttack', capacity: 5 , price: 2500, isBlock: false, averageRating: 5.0, reviews: this.reviews, bookingList: [], amenities: [ 'Car parking', 'Wi-fi'], owner: new User('') },
  // { id: 12, name: 'Paradise Inn', type: 'homestay', location: 'Egmore', city: 'jagatsinghpur', capacity: 6, price: 3000, isBlock: false, averageRating: 4.8, reviews: this.reviews, bookingList: [], amenities: [ 'Car parking', 'First Aid' , 'Wi-fi'], owner: new User('') },
  // { id: 13, name: 'Green city', type: 'homestay', location: 'Adayar', city: 'sambalpur', capacity: 2 , price: 1500, isBlock: false, averageRating: 4.9, reviews: this.reviews, bookingList: [], amenities: [ 'Car parking'], owner: new User('')}  
  // ];
  configUrl='https://api.myjson.com/bins/vm401';
  filterSubject = new Subject<Establishments[]>();  
  constructor(private http: HttpClient) {
   // this.temp = this.establishments;    
   }
  getEstablish() {
    this.filterSubject.next(this.establishments)
  };
    getFilter(formData) {
    let filterData = [];
    filterData = this.establishments.filter(data => data.price >= formData.priceMin);
    if (formData.hotelName !== '') {
      filterData = filterData.filter(data => data.name === formData.hotelName);
    }
      // console.log(filterData);
      filterData = filterData.filter(data => data.averagerating >= formData.averagerating);
      // console.log(filterData);
    if (!formData.hotel) {
      filterData = filterData.filter(data => data.type === 'hotel' ? false: true);
    }
      // console.log(filterData);
    if (!formData.roomstay) {
      filterData = filterData.filter(data => data.type === 'homestay' ? false: true);
    }
    console.log(formData);
    // console.log(filterData);
     this.filterSubject.next(filterData);
  }
 getSearch(searchData) {
   let searchValue = [];
    this.valueDisplay = searchData;
    this.http.get(this.configUrl).subscribe((x:Establishments[])=>{
      this.establishments=x;
    searchValue = this.establishments.filter(data => data.city === searchData.Location);   
    if (searchData.NoOfGuest !== ''){
    searchValue = searchValue.filter(data => data.capacity >= searchData.NoOfGuest);
    }
    this.establishments = searchValue;
    this.filterSubject.next(this.establishments);
    });
}
searchValueDisplay() {

  return this.valueDisplay;
}
viewBookDetails(data) {
  this.singleItem = this.establishments.find(data1 => data1.id === data);
  return this.singleItem;
}
}