import { Injectable } from '@angular/core';
import { User } from '../shared/models/user.model';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  isLoggedIn = false;
  loginSubject = new Subject<boolean>();
  obj:User;
 users: User[] = [
  {id: 1 , name: 'Subhashree', email: 's@gmail.com', phoneNumber: '88953823452', password: 'Mana1992', isBlock: false, role: 'user', Establishment: [], reviews: [], bookingList:[]},
  {id: 2, name: 'Shree', email: 'shree@gmail.com', phoneNumber: '1234567890', password: 'shree1992', isBlock: false,  role: 'user', Establishment: [], reviews: [], bookingList:[]}
 ];
   constructor(private router: Router) { }
  
  logIn(profileForm) {
    if (profileForm) {
      const sign= this.users.find (x=>x.email === profileForm.email && x.password === profileForm.password);
      if (sign) {
        this.isLoggedIn = true;
        this.loginSubject.next(this.isLoggedIn);
        this.obj=sign;
        return true;
      } else {
        this.isLoggedIn = false;
        this.loginSubject.next(this.isLoggedIn)
        return false;
      }
    }  
  }

  logout(){
    this.isLoggedIn = false;
    this.loginSubject.next(this.isLoggedIn);
    this.router.navigate(['/signin']);
  }

  register(user){
    this.users.push(user);
  }

  getProfile(){
    console.log(this.obj);
    return  this.obj
  }

  EditProfile(edit){
    // for (var i in this.users) {
    //   if (this.users[i] === edit) {
        this.obj.name=edit.name;
        this.obj.password=edit.password;
        this.obj.email=edit.email;
        this.obj.role=edit.role;
        this.obj.phoneNumber=edit.phoneNumber;
    //     this.obj=this.users[i];
    //  }
    // }
  
    console.log(this.obj)
  }
  }