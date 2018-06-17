import { Component, OnInit } from '@angular/core';
import { CoreService, ServiceType } from '../../core/services/CoreService/core.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ourServices: ServiceType[];
  constructor(private coreSrvc: CoreService) { }

  ngOnInit() {
    this.ourServices = this.coreSrvc.get();
  }

}
