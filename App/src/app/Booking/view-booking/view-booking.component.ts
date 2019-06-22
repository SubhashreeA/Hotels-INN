import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import { EstablishmentService } from '../../services/establishment.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Establishments } from 'src/app/shared/models/establish.model';
@Component({
  selector: 'app-view-booking',
  templateUrl: './view-booking.component.html',
  styleUrls: ['./view-booking.component.css']
})
export class ViewBookingComponent implements OnInit {
  HotelData: Establishments;
  viewdate: FormGroup
  formBuilder: any;
  count = 1;

  profileForm = new FormGroup({
    date: new FormControl(''),
    todate: new FormControl(''),
    rating: new FormControl('')
  });
  constructor(private router: Router, private establishService: EstablishmentService , private ActRoute: ActivatedRoute) { }

  ngOnInit() {
    const id:any = this.ActRoute.snapshot.paramMap.get('id');
    this.HotelData = this.establishService.viewBookDetails(+id);
    // console.log(this.HotelData);
    // this.viewdate=this.formBuilder.group({
    //    Location:[''],
    //    date:['']
    // })
    // this.profileForm.patchValue(this.establishService.searchValueDisplay())

    // let valueDisplay=this.establishService.searchValueDisplay();
    // console.log(valueDisplay);
    const date = this.establishService.searchValueDisplay()['date'];
    console.log(this.establishService.searchValueDisplay());
    console.log(date);
    this.profileForm.get('date').setValue(date);
    // this.profileForm.
    // let reviews=this.establishService.getReview();
    this.profileForm.valueChanges.subscribe(dates => {
      const firstDate = new Date(dates.date).getDate();
      const lastDate = new Date(dates.todate).getDate();
      this.count = lastDate - firstDate;
    });
}
 } 


