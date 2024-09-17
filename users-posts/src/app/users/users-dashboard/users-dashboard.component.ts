import { Component, ViewChild } from '@angular/core';
import { UserService } from '../services/user.service';
import { IUsers } from '../../interface/i-users';
import { OnInit } from '@angular/core';
import { MatTable } from '@angular/material/table';  

@Component({
  selector: 'app-users-dashboard',
  templateUrl: './users-dashboard.component.html',
  styleUrl: './users-dashboard.component.css'
})
export class UsersDashboardComponent implements OnInit {

  @ViewChild(MatTable) table!: MatTable<any>;  

  ngOnInit(): void {
    this._service.getAll().subscribe(
      response => this.users = response
    )
  }

  selectedUser: IUsers = {
    id: 1,
    name: "Marco",
    username: "marco1",
    email: "marco1@gmail.com",
    phone: "961 872 9982",
    website: "marco1.com"
  }

  displayedColumns: string[] = ['id', 'name', 'username', 'email', 'phone', 'website'];
  users: IUsers[] = [];

  constructor(private _service: UserService) { }

  addUser(user: IUsers): void {
    this.users.push(user);
    this.table.renderRows();  
    console.log(this.users);
  }
}
