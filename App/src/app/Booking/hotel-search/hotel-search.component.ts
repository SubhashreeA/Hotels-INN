import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { EstablishmentService } from 'src/app/services/establishment.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-hotel-search',
  templateUrl: './hotel-search.component.html',
  styleUrls: ['./hotel-search.component.css']
})
export class HotelSearchComponent implements OnInit {
  profileForm = new FormGroup({
    Location: new FormControl('', [Validators.required]),
    date: new FormControl('', [Validators.required]),
    NoOfGuest: new FormControl('', [Validators.required]),
    // NoOfRooms: new FormControl('',[Validators.required]),    
});
  constructor(private establishService: EstablishmentService,private router:Router) { }

  ngOnInit() {
    this.profileForm.patchValue(this.establishService.searchValueDisplay());
  }
  onSubmit(){
    // this.profileForm.valueChanges.subscribe(searchData=>{
    //     this.establishService.getSearch(searchData)
    //   })
    this.establishService.getSearch(this.profileForm.value);
    this.router.navigate(['/bookinglist']);
    }
}
