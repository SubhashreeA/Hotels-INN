import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthserviceService } from '../auth.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  profileForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required,Validators.pattern('[a-zA-Z0-9 ]{8,}')]),
      email: new FormControl('', [Validators.required,Validators.email]),
      role: new FormControl('user', [Validators.required]),
      phonenumber: new FormControl('', [Validators.required,Validators.pattern('[789][0-9]{9}')])
  });
  loading = false;
    submitted = false;
  

  // profileForm = new FormGroup({
  //   id: new FormControl(''),
  //   name: new FormControl(''),
  //   password:new FormControl(''),
  //   email:new FormControl(''),
  //   role:new FormControl('')
  // });
  constructor(private fb: FormBuilder,private router:Router,
    private authService : AuthserviceService) { }

  ngOnInit() {
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
  return this.profileForm.get('phonenumber').hasError('required') ?'you must enter a value':
  this.profileForm.get('phonenumber').hasError('pattern')?'pattern must match':'';
}
onSubmit(){ 
  console.log(this.profileForm.value);
  this.authService.register(this.profileForm.value);
  // this.authservice.register(this.profileForm.value);
 this.router.navigate(['/signin']);
    }

  }
