import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Marque } from '../interfaces/marque.interface';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class MarquesCategoriesService extends BaseService {

  constructor(
    protected http: HttpClient
  ) {
    super(http, 'bateaux/categories');
  }

}
