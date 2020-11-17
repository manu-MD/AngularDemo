import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { MatTable } from '@angular/material/table';
import { MarquesService } from 'src/app/shared/services/marques.service';
import { Marque } from 'src/app/shared/interfaces/marque.interface';
import { MarquesCategoriesService } from 'src/app/shared/services/marques-categories.service';
import { Bateau } from '../../interfaces/bateau.interface';
import { BateauService } from '../../services/bateau.service';

@Component({
  selector: 'app-bateau',
  templateUrl: './bateau.component.html',
  styleUrls: ['./bateau.component.scss']
})
export class BateauComponent implements OnInit, OnDestroy {

  @ViewChild(MatTable) myTable: MatTable<Bateau[]>;
  @ViewChild('boatForm') boatForm: FormGroupDirective;

  bateau: Bateau;
  form: FormGroup;  
  marqueId: Marque[] = [];
  liste: Bateau[] = [];
  displayColumns: string[] = [
    'marque', 'longueur', 'place','puissance', 'date', 'renseignement','email','option1', 'option2'
  ];
  subBateau: Subscription;

  longueurs = [
    { value: '-5m', name: 'moins de 5 mètres' },
    { value: '-10m', name: 'moins de 10 mètres' },
    { value: '+10m', name: 'plus de 10 mètres' },
  ];

  places = [
    { value: '4', name: '4 places' },
    { value: '6', name: '6 places' },
    { value: '8', name: '8 places' },
    { value: '10', name: '10 places' },
  ];

  puissances =[
    { value: '10', name: 'moins de 10 cv' },
    { value: '25', name: '25 cv' },
    { value: '50', name: '50 cv' },
    { value: '100', name: '100 cv' },
    { value: '200', name: '200 cv' },
    { value: '500', name: '500 cv' } 
  ];

  constructor(
    private fb: FormBuilder,
    private bs: BateauService,
    private ms: MarquesService,
    private mcs: MarquesCategoriesService
  ) {
    this.initForm();
  }

  ngOnInit(): void {
    this.findBateau();
  }

  ngOnDestroy() {
    if (this.subBateau) {
      this.subBateau.unsubscribe();
    }
  }

  initForm() {
    this.form = this.fb.group({
      marqueId: [null, Validators.required],
      energie: ['moteur'],
      longueur: [null, Validators.required],
      place: [null, Validators.required],
      puissance: [null, Validators.required],
      date:[null],
      renseignement: [null],
      email: [null, [Validators.required, Validators.email]]
    });
  }

  findBateau() {
    this.subBateau = this.bs.find<Bateau>().subscribe(
      (bateaux: Bateau[]) => {
        this.liste = bateaux;
        this.myTable.renderRows();
        console.log(bateaux);
      }
    );
  }

  submit(value: Bateau) {
    console.log(value);
    if (this.bateau && this.bateau.id) {
      this.bs.edit(this.bateau.id, value).subscribe(
        () => this.findBateau()
      )
    } else {
      this.bs.create(value).subscribe(
        () => this.findBateau()
      );
    }

    this.onReset();    
  }

  onReset(){
    this.boatForm.resetForm();
    this.form.reset();
  }

  modifier(id: string){
    this.bs.findById(id).subscribe(
      (bateau: Bateau) => {
        console.log(bateau);
        this.bateau = bateau;

        this.form.patchValue({
          marqueId: this.bateau.marque.id,
          energie: this.bateau.energie,
          longueur: this.bateau.longueur,
          place: this.bateau.place,
          date: this.bateau.date,
          renseignement: this.bateau.renseignement,
          puissance: this.bateau.puissance,
          email: this.bateau.email
        })  
      }
    )
  }

  supprimer(id: string) {
    this.bs.delete(id).subscribe(
      () => this.findBateau()
    );
  }

  getMarque(l) {
    return 'marque';
  }

  getLongueur(l) {
    const objLongueur = this.longueurs.find(x => x.value === l.longueur);
    return objLongueur.name;
  }

  getPlace(l) {
    const objPlace = this.places.find(x => x.value === l.place);
    return objPlace.name;
  }

  getPuissance(l) {
    const objPuissance = this.puissances.find(x => x.value === l.puissance);
    return objPuissance.name;
  }

  getDate(l) {
    const date = new Date(l.date);
    return `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`;
  }
}