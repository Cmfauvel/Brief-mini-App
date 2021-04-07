import { Component, OnInit } from '@angular/core';
import { users } from '../users';
import { CardUserComponent } from '../card-user/card-user.component'

@Component({
  selector: 'app-usrs-list',
  templateUrl: './usrs-list.component.html',
  styleUrls: ['./usrs-list.component.scss']
})
export class UsrsListComponent implements OnInit {
  users = users;
  share() {
    window.alert('The product has been shared!');
  }
  constructor() { }

  ngOnInit(): void {
  }

}
console.log(users)
