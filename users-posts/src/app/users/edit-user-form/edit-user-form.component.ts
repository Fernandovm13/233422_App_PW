import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { IUsers } from '../../interface/i-users';

@Component({
  selector: 'app-edit-user-form',
  templateUrl: './edit-user-form.component.html',
  styleUrl: './edit-user-form.component.css'
})

export class EditUserFormComponent {

   user : IUsers ={
    id: 0,
    name: "",
    email: "",
    phone: "",
    website: ""
  }
  constructor(private _service:  UserService){
    this._service.get().subscribe(
      response => this.user = response
    )
  }



}
