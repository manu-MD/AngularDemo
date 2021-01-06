import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {environment} from '../../../environments/environment.prod';

@Injectable({
    providedIn: 'root'
})
export class BaseService {


    baseUrl = `${environment.apiProtocol}://${environment.apiBaseUrl}`;
    url: string;

    constructor(
        protected http: HttpClient,
        @Inject('url') url: string
    ) {
        this.url = `${this.baseUrl}/${url}`;
    }
    // renvoie un observable contenant un tableau d'éléments
    find<T>(params?): Observable<T[]> {
        return this.http.get<T[]>(this.url, { params });
    }
    //  renvoie un observable contnenant un objet
    // correspondant à l'id de l'élément en paramètre
    findById<T>(id): Observable<T> {
        return this.http.get<T>(`${ this.url }/${ id }`);
    }
    // déclenche le flux de création
    create<T>(param) {
        return this.http.post<T>(this.url, param);
    }
    // déclenche le flux d'édition
    edit<T>(id: string, param) {
        return this.http.put<T>(`${ this.url }/${ id }`, param);
    }
    // déclenche le flux de suppression
    delete<T>(id) {
        return this.http.delete<T>(`${ this.url }/${ id }`);
    }
}
