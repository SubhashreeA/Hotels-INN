import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthserviceService } from 'src/app/Auth/auth.service';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/user.model';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  obj: User;
  
  profileForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required,Validators.pattern('[a-zA-Z0-9 ]{8,}')]),
    email: new FormControl('', [Validators.required,Validators.email]),
    role: new FormControl('user', [Validators.required]),
    phoneNumber: new FormControl('', [Validators.required,Validators.pattern('[789][0-9]{9}')])
});
  

  constructor(private authService : AuthserviceService,private router:Router) { }

  ngOnInit() {
    this.profileForm.patchValue(this.authService.getProfile())
  }
  getEmailErrorMessage() {
    return this.profileForm.get('email').hasError('required') ? 'You must enter a value' :
    this.profileForm.get('email').hasError('email') ? 'Not a valid email' :
            '';
  }
  getUsernameErrorMessage(){
    return this.profileForm. get('name').hasError('required') ?'you must enter a value':'';    
  }
  getPasswordErrorMessage(){
    return this.profileForm.get('password').hasError('required')?'you must enter a value':
    this.profileForm.get('password').value.length<8?'length should be greater than 8': 
    this.profileForm.get('password').hasError('pattern')?'':'';
  }
  getRoleErrorMessage(){
    return this.profileForm.get('role').hasError('required')?'':'';
  }
getPhonenumberErrorMessage(){
  return this.profileForm.get('phoneNumber').hasError('required') ?'you must enter a value':
  this.profileForm.get('phoneNumber').hasError('pattern')?'pattern must match':'';
}
onSubmit(){
  console.log(this.profileForm);
  this.obj = this.profileForm.value;
      // stop here if form is invalid
      if (this.profileForm.invalid) {
          return;
      }
     this.authService.EditProfile(this.profileForm.value)
      this.router.navigate(['/search']);
  }

}
