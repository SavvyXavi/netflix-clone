import { Component, OnInit } from '@angular/core';
import { Account } from '../models/Account';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  loggedIn!:boolean;
  accountInfo!: Account;

  constructor() { }

  ngOnInit(): void {
  }

  checkLoggedIn(account: Account) {
    console.log('Account is not loggedin!');
  }
}
