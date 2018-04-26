import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class HeaderComponent implements OnInit {
  loginStatus: string;
  logined: boolean;
  constructor(private router: Router) { }

  ngOnInit() {
    this.loginStatus = sessionStorage.getItem('login');
    if (this.loginStatus === 'true') {
      this.logined = true;
    } else {
      this.logined = false;
    }
  }
  logOut() {
    alert('home Page');
    sessionStorage.setItem('login', 'false');
    this.router.navigateByUrl('/');

  }
}
