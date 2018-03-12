import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  userInput = 'Please enter user name';
  updateUser = false;

  constructor() { }

  ngOnInit() {
  }

  onUserInput() {
    this.updateUser = true;
    return this.userInput = '';

  }

  /* onUserUpdate() {
    if (this.userInput === '') {
      return this.updateUser = true;
    }
  } */

}
