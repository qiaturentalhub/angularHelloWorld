import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  // we need to create a guard to prevent users from accessing content that they shld not see

  constructor(private user:UserService) { }

  ngOnInit() {
  }

}
