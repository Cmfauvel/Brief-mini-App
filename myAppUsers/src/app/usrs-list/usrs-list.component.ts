import { Component, OnInit } from '@angular/core';
import { users } from '../users';

@Component({
  selector: 'app-usrs-list',
  templateUrl: './usrs-list.component.html',
  styleUrls: ['./usrs-list.component.scss']
})
export class UsrsListComponent implements OnInit {
  users = users;
  constructor() { }

  ngOnInit(): void {
  }

}
console.log(users)
