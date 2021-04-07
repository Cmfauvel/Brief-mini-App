import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { users } from '../users';

@Component({
  selector: 'app-card-user',
  templateUrl: './card-user.component.html',
  styleUrls: ['./card-user.component.scss']
})
export class CardUserComponent implements OnInit {
  user: any;
  users = users;
  
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // First get the product id from the current route.
  const routeParams = this.route.snapshot.paramMap;
  const id = String(routeParams.get('userId'));
    console.log(routeParams, id)
  // Find the product that correspond with the id provided in route.
  this.user = users.find(user => user.login.uuid === id);
  }
  

}
