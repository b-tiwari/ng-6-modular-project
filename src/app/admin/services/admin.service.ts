import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private authUsers = [
    { name: 'John', color: '#ddd'},
    { name: 'Tom', color: '#ccc111'},
    { name: 'Robert', color: '#fff111'}
  ];
  constructor() { }

  isUserAuthenticated = (name: String): boolean => {
    return this.authUsers.filter((u) => u.name.toLowerCase() === name.toLowerCase() ).length > 0;
  }

  getUsers = () => this.authUsers;

}
