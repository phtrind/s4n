import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile-container',
  templateUrl: './profile-container.component.html',
  styleUrls: ['./profile-container.component.sass']
})
export class ProfileContainerComponent implements OnInit {
  user: User;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  saveUser(user: User): void {
    this.userService.saveUser(user);
    this.user = user;
  }

}
