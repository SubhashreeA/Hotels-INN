import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-hotel-search',
  templateUrl: './hotel-search.component.html',
  styleUrls: ['./hotel-search.component.css']
})
export class HotelSearchComponent implements OnInit {
  profileForm = new FormGroup({
    Location: new FormControl('',[Validators.required]),
    Date: new FormControl('',[Validators.required]),
    NoOfGuest: new FormControl('',[Validators.required]),
    NoOfRooms: new FormControl('',[Validators.required]),
    
});
  constructor() { }

  ngOnInit() {
  }

}
