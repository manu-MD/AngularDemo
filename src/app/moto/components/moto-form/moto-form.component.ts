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
    private ms: MarquesService,
    private ts: TypesService,
    private cs: CouleursService
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
  
  findMoto() {
    this.subMoto = this.mfs.find<Moto>().subscribe(
      (motos: Moto[]) => { 
        this.liste = motos;
        this.myTable.renderRows();
      }
    );    
  }

  submit(value: Moto) {
    if (this.moto && this.moto.id) {
      this.mfs.edit(this.moto.id, value).subscribe(
        () => this.findMoto()
      )
    } else {
      this.mfs.create(value).subscribe(
        () => this.findMoto()   
      );
    }
   
    this.onReset();
  }
  
  onReset(){
    this.bikeForm.resetForm();
    this.form.reset();
  }
  
  modifier(id: string) {
    this.mfs.findById(id).subscribe(
      (moto: Moto) => {
        this.moto = moto;

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

  supprimer(id: string) {
    this.mfs.delete(id).subscribe(
      () => this.findMoto()
    );
  }

  getMarque(l) {
    return 'marque';
  }
   
  getType(l) {
    return 'type';
  }

  getCouleur(l) {
    return 'couleur';
  }

  getDate(l) {
    const date = new Date(l.date);
    return `${date.getDay()}/${date.getMonth()+1}/${date.getFullYear()}`;
  }
}