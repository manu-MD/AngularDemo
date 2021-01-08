import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/shared/services/base.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService  extends BaseService {

  role: string;

  constructor(
    protected http: HttpClient,
    public jwtHelper: JwtHelperService
  ) {
    super(http, 'auth');
  }

  static getToken() {
    return localStorage.getItem('token');
  }

  login(email, password) {
    // retour OK 200, on récupère l'accès token et on le stock dans le localStorage
    // console.log(this.jwtHelper.decodeToken(res.access_token));
    // localStorage.setItem('token', res.access_token);
    return this.http.post(this.url + '/login', { email, password }).pipe(tap((res: any) => {
      localStorage.setItem('token', res.access_token);
      const token = this.jwtHelper.decodeToken(res.access_token);
      this.role = token.role;
      console.log(this.role);
    }));
  }

}
