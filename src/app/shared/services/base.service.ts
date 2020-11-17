import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class BaseService {


    baseUrl = 'http://localhost:3000';
    url: string;

    constructor(
        protected http: HttpClient,
        @Inject('url') url: string
    ) {
        this.url = `${this.baseUrl}/${url}`;
    }

    find<T>(params?): Observable<T[]> {
        return this.http.get<T[]>(this.url, { params });
    }

    findById<T>(id): Observable<T> {
        return this.http.get<T>(`${ this.url }/${ id }`);
    }

    create<T>(param) {
        return this.http.post<T>(this.url, param);
    }

    edit<T>(id: string, param) {
        return this.http.put<T>(`${ this.url }/${ id }`, param);
    }

    delete<T>(id) {
        return this.http.delete<T>(`${ this.url }/${ id }`);
    }
}