import { Injectable } from '@angular/core';

export type ServiceType = {
  name: string,
  path: string
};

@Injectable({
  providedIn: 'root'
})
export class CoreService {
  private ourServices: ServiceType[] = [
    {
      name: 'Core Services',
      path: '/core'
    },
    {
      name: 'Admin Services',
      path: '/admin'
    }
  ];
  constructor() { }

  get = () => {
    return this.ourServices;
  }
}
