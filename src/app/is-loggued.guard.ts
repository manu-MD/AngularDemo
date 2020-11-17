import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class IsSignedInGuard implements CanActivate {

    constructor(
        private router: Router
    ) {
    }
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const isSignedIn = localStorage.getItem('token');
        if (!isSignedIn) {
            this.router.navigate(['/']);
        }
        return !!isSignedIn;
    }

}