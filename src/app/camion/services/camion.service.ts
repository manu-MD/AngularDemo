import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/shared/services/base.service';
import { Camion } from '../interfaces/camion.interface';

@Injectable({
  providedIn: 'root'
})
export class CamionService  extends BaseService {

  private liste: Camion[] = [];

  constructor(
    protected http: HttpClient
  ) {
    super(http, 'camions');
   }
}
