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
      const usr = JSON.parse(str);

      const user: User = {
        birthDate: usr.birthDate ? new Date(usr.birthDate) : null,
        document: usr.document,
        email: usr.email,
        name: usr.nome,
        surname: usr.surname,
        username: usr.username
      };

      return user;
    }

    return null;
  }

  saveUser(user: User): void {
    this.cookieService.set('user', JSON.stringify(user));
  }
}
