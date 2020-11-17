import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/shared/services/base.service';
import { Moto } from '../interfaces/moto-form.interface';

@Injectable({
  providedIn: 'root'
})
export class MotoFormService extends BaseService {

  private liste: Moto[] = [];

  constructor(
    protected http: HttpClient
  ) {
    super(http, 'motos');
  }
}
