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
    // garde qui surveille l'existence de la clé token
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const isSignedIn = localStorage.getItem('token');
        // si la clé token n'existe pas, renvoi vers la page de login 
        if (!isSignedIn) {
            this.router.navigate(['/login']);
        }
        // le token existe, on poursuit le traitement
        return true;
    }

}