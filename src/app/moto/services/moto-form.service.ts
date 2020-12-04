import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/shared/services/base.service';
import { Moto } from '../interfaces/moto-form.interface';

@Injectable({
  providedIn: 'root'
})
//  MotoFormservice étend BaseService: 
// je peux appeler les méthodes de BaseService depuis MotoFormService
// depuis un composant MotoFormService.find() sera accessible
export class MotoFormService extends BaseService {

  constructor(
    protected http: HttpClient
  ) {
    // "super" sert à appeler le constructor parent (ici BaseService)
    super(http, 'motos');
  }
}
