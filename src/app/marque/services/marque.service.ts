import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/shared/services/base.service';

@Injectable({
  providedIn: 'root'
})
export class MarqueService extends BaseService {

  constructor(
    protected http: HttpClient
  
  ) {
    super(http, 'marques');
  }
}
