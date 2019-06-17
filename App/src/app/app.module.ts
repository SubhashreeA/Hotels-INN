import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import 'hammerjs';

import { AppComponent } from './app.component';
import { SignInComponent } from './Auth/sign-in/sign-in.component';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SignUpComponent } from './Auth/sign-up/sign-up.component';
import { MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatRadioModule } from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { HotelSearchComponent } from './Booking/hotel-search/hotel-search.component';
import { HotelFilterComponent } from './Booking/hotel-filter/hotel-filter.component';
import { HotelItemComponent } from './Booking/hotel-item/hotel-item.component';
import { HotelListComponent } from './Booking/hotel-list/hotel-list.component';  
import {MatSelectModule} from '@angular/material/select'; 
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatSidenavModule} from '@angular/material/sidenav'; 
import {MatCheckboxModule} from '@angular/material/checkbox'; 
import {MatSortModule} from '@angular/material/sort'; 
import {MatAutocompleteModule} from '@angular/material/autocomplete'; 

import {MatIconModule} from '@angular/material/icon'; 
import {MatSliderModule} from '@angular/material/slider'; 
import {MatGridListModule} from '@angular/material/grid-list'; 

import {MatDividerModule} from '@angular/material/divider'; 
import {MatMenuModule,MatDatepickerModule, MatNativeDateModule} from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { SearchComponent } from './Booking/search/search.component';
@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    HotelSearchComponent,
    HotelFilterComponent,
    HotelItemComponent,
    HotelListComponent,
    SearchComponent,
   
  
  ],
  imports: [
    BrowserModule,FormsModule,MatSortModule,
    BrowserAnimationsModule, AppRoutingModule,
    ReactiveFormsModule,FlexLayoutModule,MatAutocompleteModule,MatDividerModule,MatGridListModule,
    MatFormFieldModule,MatIconModule,MatNativeDateModule ,MatCheckboxModule,MatSliderModule,
    MatInputModule,MatRadioModule,MatCardModule,MatButtonModule,MatSelectModule,MatDatepickerModule,MatSidenavModule, AppRoutingModule
  ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
