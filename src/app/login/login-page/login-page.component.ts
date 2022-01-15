import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  googleTapped() {
    const url =
      'https://accounts.google.com/o/oauth2/v2/auth?client_id=425414274703-qpqm18tb2an1b19lhht3ppclm3e28ub9.apps.googleusercontent.com&redirect_uri=https://connect.get1page.com/Authenticated/03300ff747684bbc88163577dc7b9f7a&response_type=code&scope=https://www.googleapis.com/auth/userinfo.email+https://www.googleapis.com/auth/userinfo.profile+https://www.googleapis.com/auth/drive.readonly';
      window.open(url);
  }
}
