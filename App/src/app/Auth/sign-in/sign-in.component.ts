import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl , Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthserviceService } from '../auth.service';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  submited = false;
  errorMessage;
  profileForm = new FormGroup({      
    email: new FormControl('', [Validators.required,Validators.email]),
    password: new FormControl('', [Validators.required]),
  });
  constructor(private router:Router,private auth:AuthserviceService) { }

  ngOnInit() {

  }
  getEmailErrorMessage() {
    return this.profileForm.get('email').hasError('required') ? 'You must enter a value' :
    this.profileForm.get('email').hasError('email') ? 'Not a valid email' :
            '';
  }
  getPasswordErrorMessage(){
    return this.profileForm.get('password').hasError('required') ? 'you must enter a value':
    this.profileForm.get(' password ').hasError('maxLength') ? 'password must be 8 characters':'';
  }
  onSubmit(){ 

this.submited=true;
if(this.profileForm.invalid) {
  return 'please enter';
}
const result = this.auth.logIn(this.profileForm.value);
if (result) {
   this. router.navigate(['/search']);
} else{
  this.errorMessage = "Invalid email and password"
}
}
}
