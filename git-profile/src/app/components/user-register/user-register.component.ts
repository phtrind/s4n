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
  user: string;

  constructor() { }

  ngOnInit() {
  }

  onSaveClick(event: Event): void {
    const user: User = this.getUserInfo();
    event.stopPropagation();
    this.saveClick.emit(user);
  }

  getUserInfo(): User {
    const user: User = {
      name: this.name,
      surname: this.surname,
      document: this.document,
      birthDate: this.birthDate,
      email: this.email,
      user: this.user
    };

    console.log(user);

    return user;
  }
}
