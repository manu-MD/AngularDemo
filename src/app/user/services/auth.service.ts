import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/shared/services/base.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService  extends BaseService {


  constructor(
    protected http: HttpClient
  ) {
    super(http,'auth');
  }

  login(email, password) {
    return this.http.post(this.url + '/login', { email, password });
  }

}
