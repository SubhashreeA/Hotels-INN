import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {HotelListComponent} from '../app/Booking/hotel-list/hotel-list.component';
import { HotelSearchComponent} from '../app/Booking/hotel-search/hotel-search.component';
import {HotelItemComponent} from '../app/Booking/hotel-item/hotel-item.component';
import {HotelFilterComponent} from '../app/Booking/hotel-filter/hotel-filter.component';
import {SignInComponent} from '../app/Auth/sign-in/sign-in.component';
import {SignUpComponent} from '../app/Auth/sign-up/sign-up.component';
import { SearchComponent } from './Booking/search/search.component';
import { ViewBookingComponent } from './Booking/view-booking/view-booking.component';
import {MyBookingComponent} from '../app/my-booking/my-booking.component';
import {ProfileComponent} from '../app/profile/profile.component';
const appRoutes: Routes = [
  { path: 'bookinglist', component: HotelListComponent },
  { path: 'signin', component: SignInComponent },
  { path: 'signup', component: SignUpComponent },
  // { path: 'signup', component: SignUpComponent },
  { path: 'search', component: SearchComponent },
  { path: 'booking/:id', component: ViewBookingComponent },
  {path : 'myprofile', component: ProfileComponent},
  {path : 'mybooking', component: MyBookingComponent},
  { path: '',   redirectTo: '/search', pathMatch: 'full' },
];
@NgModule({
  imports: [
    CommonModule ,
      RouterModule.forRoot(
      appRoutes,    
    )
  ],
  exports: [
    RouterModule
  ]
 })
export class AppRoutingModule { }
