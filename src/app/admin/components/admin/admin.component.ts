import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public authUsers: any[];
  constructor(private adminSrvc: AdminService) { }

  ngOnInit() {
    this.authUsers = this.adminSrvc.getUsers();
  }

}
