import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';


@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(
    private router: Router
  ) {}
  // intercepteur
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // récupère la valeur du token dans le localstorage
    const token = localStorage.getItem('token');
    // si un token a été trouvé, on l'ajoute dans l'entête de la requête,
    // il est nécessaire pour les appels sur les flux sécurisés
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }
    // déclenche la requête modifiée
    return next.handle(request).pipe(catchError(err => {
      // si le code retour est 401 (unauthorized)
      if (err.status === 401) {
        // supprime le token (peut exister dans le localstorage mais ne plus être valide)
        localStorage.removeItem('token');
        // redirige vers le login
        this.router.navigate(['/login']);
      }

      const error = err.error.message || err.statusText;
      return throwError(error);
    }));
  }
}
