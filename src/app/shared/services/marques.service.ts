import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class MarquesService extends BaseService {

  constructor(
    protected http: HttpClient
  ) {
    super(http, 'marques');
  }
}
