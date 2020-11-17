import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { MatTable } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Marque } from '../shared/interfaces/marque.interface';
import { Camion } from './interfaces/camion.interface';
import { CamionService } from './services/camion.service';

@Component({
  selector: 'app-camion',
  templateUrl: './camion.component.html',
  styleUrls: ['./camion.component.scss']
})
export class CamionComponent implements OnInit {

  @ViewChild(MatTable) myTable: MatTable<Camion[]>;
  @ViewChild('truckForm') truckForm: FormGroupDirective;

  form: FormGroup;
  camion: Camion;
  liste: Camion[] = [];
  marqueId: Marque[] = [];
  subCamion: Subscription;
  displayColumns: string[] = [
    'marque', 'genre', 'poids', 'date', 'renseignement', 'email', 'option1', 'option2'
  ];

  genres = [
    {value: 'plat', name: 'plateau'},
    {value: 'ben', name: 'benne'},
    {value: 'cit', name: 'citerne'},
    {value: 'frig', name: 'frigorifique'},
  ];
  poids = [
    {value: '19', name: '19 tonnes'},
    {value: '26', name: '26 tonnes'},
    {value: '40', name: '40 tonnes'},
  ];

  constructor(
    private fb: FormBuilder,
    private cs: CamionService

  ) {
    this.initForm();
   }

  ngOnInit(): void {
    this.findCamion();
  }

  ngOnDestroy() {
    if (this.subCamion) {
      this.subCamion.unsubscribe();
    }
  }

  initForm() {
    this.form = this.fb.group({
      marqueId: [null, [Validators.required]],
      genre: [null, Validators.required],
      poids: [null, Validators.required],
      date:[null],
      renseignement: [null],
      email: [null, [Validators.required, Validators.email]]
    }) 
  }

  findCamion() {
    this.subCamion = this.cs.find<Camion>().subscribe(
      (camions: Camion[])=> {
        this.liste = camions;
        this.myTable.renderRows();
      }
    );
  }

  submit(value: Camion) {
    console.log(value);
    if (this.camion && this.camion.id) {
      this.cs.edit(this.camion.id, value).subscribe(
        () => this.findCamion()
      )
    } else {
      this.cs.create(value).subscribe(
        () => this.findCamion()
      );
    }
    this.onReset();
  }

  onReset(){
    this.truckForm.resetForm();
    this.form.reset();
  }

  modifier(id: string){
    this.cs.findById(id).subscribe(
      (camion: Camion) => {
        console.log(camion);
        this.camion = camion;

        this.form.patchValue({
          marqueId: this.camion.marque.id,
          genre: this.camion.genre,
          poids: this.camion.poids,
          date: this.camion.date,
          renseignement: this.camion.renseignement,
          email: this.camion.email
        })  
      }
    )
  }

  supprimer(id: string) {
    this.cs.delete(id).subscribe(
      () => this.findCamion()
    );
  }
  getMarque(l) {
    return 'marque';
  }

  getGenre(l) {
    const objGenre = this.genres.find(x => x.value === l.genre);
    return objGenre.name;
  }

  getPoids(l) {
    const objPoids = this.poids.find(x => x.value === l.poids);
    return objPoids.name;
  }

  getDate(l) {
    const date = new Date(l.date);
    return `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`;
  }
}
