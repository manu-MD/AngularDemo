import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, Validators, } from '@angular/forms';
import { Subscription } from 'rxjs';
import { MatTable } from '@angular/material/table';
import { TypesService } from 'src/app/shared/services/types.service';
import { Couleur } from 'src/app/shared/interfaces/couleur.interface';
import { CouleursService } from 'src/app/shared/services/couleurs.service';
import { MarquesService } from 'src/app/shared/services/marques.service';
import { Marque } from 'src/app/shared/interfaces/marque.interface';
import { TypeInterface } from 'src/app/shared/interfaces/typeInterface.interface';
import { Moto } from '../../interfaces/moto-form.interface';
import { MotoFormService } from '../../services/moto-form.service';

@Component({
  selector: 'app-moto-form',
  templateUrl: './moto-form.component.html',
  styleUrls: ['./moto-form.component.scss']
})
export class MotoFormComponent implements OnInit, OnDestroy {

  @ViewChild(MatTable) myTable: MatTable<Moto[]>;
  @ViewChild('bikeForm') bikeForm: FormGroupDirective;

  moto:Moto;
  form: FormGroup;  
  marqueId:Marque[] = [];
  typeId: TypeInterface[] = [];
  couleurId: Couleur[] =[];
  liste: Moto[] = [];
  displayColumns: string [] = [
    'marque', 'type', 'couleur','date', 'renseignement', 'email','option1', 'option2'
  ];
  subMoto: Subscription;

  constructor(
    private fb: FormBuilder,
    private mfs: MotoFormService,
    // private ms: MarquesService,
    // private ts: TypesService,
    // private cs: CouleursService
  ) {
    this.initForm();
  }

  ngOnInit(): void { 
    this.findMoto();
  }
  
  ngOnDestroy() {
    if (this.subMoto) {
      this.subMoto.unsubscribe();
    }
  }
  // intialisation du formulaire avec les règles de saisie
  initForm() {
    this.form = this.fb.group({
      marqueId: [null, Validators.required],
      cylindree: ['0'],
      typeId: [null, Validators.required],
      couleurId: [null, Validators.required],
      date:[null],
      renseignement: [null],
      email: [null, [Validators.required, Validators.email]]
    });    
  } 
  // récupère la liste des annonces moto déposées
  findMoto() {
    this.subMoto = this.mfs.find<Moto>().subscribe(
      (motos: Moto[]) => { 
        this.liste = motos;
        this.myTable.renderRows();
      }
    );    
  }
  // envoie l'annonce créée dans le formulaire
  submit(value: Moto) {
    // si l'objet existe nous devons modifier
    if (this.moto && this.moto.id) {
      // appel de l'api de modification
      this.mfs.edit(this.moto.id, value).subscribe(
        () => this.findMoto()
      )
    } else { // sinon on ajoute l'objet      
      this.mfs.create(value).subscribe(
        // appel l'api de création
        () => this.findMoto()   
      );
    }   
    this.onReset();
  }
  // réinitialise le formulaire
  onReset(){
    this.bikeForm.resetForm();
    this.form.reset();
  }
  // récupère l'objet à modifier pour pré saisie du formulaire
  modifier(id: string) {
    // recherche l'objet à modifier
    this.mfs.findById(id).subscribe(
            (moto: Moto) => {
        this.moto = moto;
        // met à jour les champs du formulaire
        this.form.patchValue({
          marqueId: this.moto.marque.id,
          typeId: this.moto.type.id,
          couleurId: this.moto.couleur.id,
          cylindree: this.moto.cylindree,
          date: this.moto.date,
          renseignement: this.moto.renseignement,
          email: this.moto.email
        })
      }
    )
  }
  // permet de supprimer l'objet
  supprimer(id: string) {
    this.mfs.delete(id).subscribe(
      () => this.findMoto()
    );
  }
}