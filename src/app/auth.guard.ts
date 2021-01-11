import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivate} from '@angular/router';
import {AuthService} from './user/services/auth.service';
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(
        private router: Router,
        private authService: AuthService,
        public jwtHelper: JwtHelperService
    ) {
    }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const token = localStorage.getItem('token');
    if (token && !this.jwtHelper.isTokenExpired(token) && this.authService.role) {
      console.log(route.data.roles, this.authService.role);
      if (route.data.roles && route.data.roles.indexOf(this.authService.role) === -1) {
        console.log(route.data.roles, this.authService.role);
        if (this.authService.role === 'User') {
          this.router.navigate(['/user']);
        }
      }
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }
}


