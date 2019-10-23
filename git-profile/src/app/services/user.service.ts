import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private cookieService: CookieService) { }

  getUser(): User {
    const str = this.cookieService.get('user');

    if (str && str.length > 0) {
      return JSON.parse(str);
    }

    return null;
  }

  saveUser(user: User): void {
    this.cookieService.set('user', JSON.stringify(user));
  }
}
