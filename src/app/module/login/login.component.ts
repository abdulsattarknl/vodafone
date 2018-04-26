import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent implements OnInit {
	username: any;
	loginpassword: any;
	loginSuccess: boolean;
	loginData = {
		'admin': {
			'loginName': 'admin',
			'password': 'admin'

		},
		'user': {
			'loginName': 'user',
			'password': 'user'
		}

	};
  constructor(private router: Router) { }
  login() {
		if (this.username == this.loginData.admin.loginName && this.loginpassword == this.loginData.admin.password) {
			sessionStorage.setItem('type', 'admin');
			this.router.navigateByUrl('/dashboard');
			this.loginSuccess = true;
			sessionStorage.setItem('login', 'true');
		} else {
			if (this.username == this.loginData.user.loginName && this.loginpassword == this.loginData.user.password) {
				sessionStorage.setItem('type', 'user');
				this.router.navigateByUrl('/dashboard');
				this.loginSuccess = true;
				sessionStorage.setItem('login', 'true');
			} else {
				alert('Check Username and Password');
				sessionStorage.setItem('login', 'false');
			}
		}

  }

  ngOnInit() {
		this.loginSuccess = false;
  }

}
