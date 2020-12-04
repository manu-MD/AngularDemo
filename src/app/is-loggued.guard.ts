import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot} from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class IsSignedInGuard implements CanActivateChild {

    constructor(
        private router: Router
    ) {
    }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const isSignedIn = localStorage.getItem('token');
        console.log(isSignedIn);
        if (!isSignedIn) {
            this.router.navigate(['/login']);
        }
        // le token existe, on poursuit le traitement
        return true;
    }

}


