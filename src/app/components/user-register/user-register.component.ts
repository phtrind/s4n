import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.sass']
})
export class UserRegisterComponent implements OnInit {
  @Output() saveClick = new EventEmitter<User>();
  name: string;
  surname: string;
  document: string;
  birthDate: Date;
  email: string;
  username: string;

  constructor() { }

  ngOnInit() {
  }

  onSaveClick(event: Event): void {
    event.stopPropagation();
    this.saveClick.emit(this.getUserInfo());
  }

  getUserInfo(): User {
    return {
      name: this.name,
      surname: this.surname,
      document: this.document,
      birthDate: this.birthDate,
      email: this.email,
      username: this.username
    };
  }
}
