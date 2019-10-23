import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private cookieService: CookieService) { }

  saveUser(user: User): void {
    console.log(JSON.parse(this.cookieService.get('user')));
    console.log(JSON.stringify(user));
    this.cookieService.set('user', JSON.stringify(user));
  }
}
