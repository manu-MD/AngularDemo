import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/shared/services/base.service';
import { Voiture } from '../interfaces/voiture.interface';

@Injectable({
  providedIn: 'root'
})
export class VoitureService extends BaseService {

  private liste: Voiture[] = [];

  constructor(
    protected http: HttpClient
  ){
    super(http, 'voitures');
  }

  editDispo(id: string) {
    return this.http.put(`${ this.url }/${ id }/dispo`, {});
  }

  getPhoto(id: string) {
    console.log(`${ this.url }/photo/${ id }`);
    return `${ this.url }/photo/${ id }`;
  }
}
