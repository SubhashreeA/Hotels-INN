import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import {EstablishmentService} from '../../services/establishment.service'
@Component({
  selector: 'app-hotel-filter',
  templateUrl: './hotel-filter.component.html',
  styleUrls: ['./hotel-filter.component.css']
})
export class HotelFilterComponent implements OnInit {
  profileForm = new FormGroup({
    hotelName: new FormControl('',[Validators.required]),
    hotel: new FormControl(true,[Validators.required]),
    roomstay: new FormControl(true,[Validators.required]),
    // location: new FormControl('',[Validators.required]),
    averageRating: new FormControl(1,[Validators.required]),
    priceMin: new FormControl(1000),
    priceMax: new FormControl(10000),
});
//value: number = 1000;
myControl = new FormControl();
// options: string[] = ['One', 'Two', 'Three'];
filters=[]

  constructor(private establishService: EstablishmentService) { }
  
  ngOnInit() {
   this.profileForm.valueChanges.subscribe(formData=>{
     this.establishService.getFilter(formData)
   })
    }
    
    setRating(star:number){
      this.profileForm.get("averageRating").setValue(star);
    }
    
  }


