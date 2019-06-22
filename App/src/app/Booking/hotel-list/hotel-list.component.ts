import { Component, OnInit } from '@angular/core';
import {EstablishmentService} from '../../services/establishment.service';
import { FormGroup, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit { 
establishments=[];
 rating= 0;
 price= 0;
  

  constructor(private establishService: EstablishmentService,private formBulider:FormBuilder) { }

  ngOnInit() { 
  
    this.establishService.filterSubject.subscribe(filterData=>{
      this.establishments=filterData;
      this.getSort();
    });

    this.establishService.getEstablish();
  }
  // getDetails(): void {
  //   this.establishService.getEstablish()
  //       .subscribe(data => this.establishments =data );
  getRating(){
    if(this.rating ===1){
      this.rating=2;
    }
    else {
      this.rating =1;
    }
    this.price=0;
    this.getSort();
  }
  getPrice(){
    if(this.price==1){
      this.price=2;
    }
    else{
      this.price=1;
    }
    this.rating=0;
    this.getSort();
  }
  getSort(){
    if(this.rating === 1){
      this.establishments.sort((a,b)=>a.averagerating - b.averagerating);
    }
    else if(this.rating === 2) {
      this.establishments.sort((a,b)=>b.averagerating - a.averagerating);
    }
    if(this.price === 1){
      this.establishments.sort((a,b)=>a.price - b.price);
    }
    else if(this.price === 2){
      this.establishments.sort((a,b)=>b.price - a.price)
    }
  }
  }

