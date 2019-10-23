import { GitService } from './../../services/git.service';
import { Repository } from './../../interfaces/repository';
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
  repositories: Repository[];

  constructor(private userService: UserService, private gitService: GitService) { }

  ngOnInit() {
    this.gitService.repositories$.subscribe(x => {
      this.repositories = x;
    });
  }

  saveUser(user: User): void {
    this.userService.saveUser(user);
    this.user = user;
    this.gitService.fetchRepositories(user.username);
  }

}
