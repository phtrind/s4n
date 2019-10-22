import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.sass']
})
export class UserRegisterComponent implements OnInit {
  @Output() saveClick = new EventEmitter<User>();

  constructor() { }

  ngOnInit() {
  }

  onSaveClick(event: Event): void {
    const user: User = this.getUserInfo();
    event.stopPropagation();
    this.saveClick.emit(user);
  }

  // Develop the binding
  getUserInfo(): User {
    return {
      name: 'Pedro',
      surname: 'Trindade',
      document: 'document',
      birthDate: new Date(),
      email: 'phtrind@hotmail.com',
      user: 'phtrind'
    };
  }

}
