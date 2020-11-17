import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/shared/services/base.service';
import { Bateau } from '../interfaces/bateau.interface';

@Injectable({
  providedIn: 'root'
})
export class BateauService extends BaseService {

  private liste: Bateau[] = [];

  constructor(
    protected http: HttpClient
  ){
    super(http, 'bateaux');
  }
}