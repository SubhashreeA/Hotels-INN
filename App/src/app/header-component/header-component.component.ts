import { Component, OnInit } from '@angular/core';
import {AuthserviceService} from '../Auth/auth.service';
@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css']
})
export class HeaderComponentComponent implements OnInit {

  constructor(private auth:AuthserviceService) { }
 isLoggedIn=false;
  ngOnInit() {
    this.auth.loginSubject.subscribe(data => this.isLoggedIn=data);
  }

}
