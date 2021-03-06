import {Component, OnInit, ViewChild} from '@angular/core';
import {FormGroup, FormGroupDirective} from '@angular/forms';
import { Bateau } from 'src/app/bateau/interfaces/bateau.interface';
import { BateauService } from 'src/app/bateau/services/bateau.service';
import { Camion } from 'src/app/camion/interfaces/camion.interface';
import { CamionService } from 'src/app/camion/services/camion.service';
import { Moto } from 'src/app/moto/interfaces/moto-form.interface';
import { MotoFormService } from 'src/app/moto/services/moto-form.service';
import { Voiture } from 'src/app/voiture/interfaces/voiture.interface';
import { VoitureService } from 'src/app/voiture/services/voiture.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  selector: string;
  form: FormGroup;
  voiture: Voiture;
  voitures: Voiture[];
  bateaux: Bateau[];
  motos: Moto[];
  camions: Camion[];
  typeVehicule = ['Voiture', 'Moto', 'Bateau', 'Camion'];
  constructor(
    private vs: VoitureService,
    private bs: BateauService,
    private ms: MotoFormService,
    private cs: CamionService
  ) { }
  ngOnInit(): void {
    console.log(this.vs);
  }
  loadVehicules(e) {
    if (e.value === 'Moto') {
      this.findMotos();
    } else if (e.value === 'Bateau') {
      this.findBateaux();
    } else if (e.value === 'Camion') {
      this.findCamions();
    } else {
      this.findVoitures();
    }
  }
  findVoitures() {
    this.vs.find().subscribe(
      (voitures: Voiture[]) => {
        this.voitures = voitures;
        //this.voitures.forEach(voiture => {
        //  this.vs.getPhoto(voiture.id).subscribe(photo => voiture.photo = photo);
        //});
      }
    );
  }

  getVoiturePhoto(voiture) {
    return this.vs.getPhoto(voiture.id);
  }

  findMotos() {
    this.ms.find().subscribe(
      (motos: Moto[]) => this.motos = motos
    );
  }
  findBateaux() {
    this.bs.find().subscribe(
      (bateaux: Bateau[]) => this.bateaux = bateaux
    );
  }
  findCamions() {
    this.cs.find().subscribe(
      (camions: Camion[]) => this.camions = camions
    );
  }

  changeStatus(voiture) {
    this.vs.editDispo(voiture.id).subscribe(
      () => this.findVoitures()
    );
  }
}
