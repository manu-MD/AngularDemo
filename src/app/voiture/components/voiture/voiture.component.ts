import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { MatTable } from '@angular/material/table';
import { Couleur } from 'src/app/shared/interfaces/couleur.interface';
import { Marque } from 'src/app/shared/interfaces/marque.interface';
import { TypeInterface } from 'src/app/shared/interfaces/typeInterface.interface';
import { Voiture } from '../../interfaces/voiture.interface';
import { VoitureService } from '../../services/voiture.service';

@Component({
  selector: 'app-voiture',
  templateUrl: './voiture.component.html',
  styleUrls: ['./voiture.component.scss']
})
export class VoitureComponent implements OnInit, OnDestroy {

  @ViewChild(MatTable) myTable: MatTable<Voiture[]>;
  @ViewChild('carForm') carForm: FormGroupDirective;

  voiture: Voiture;
  form: FormGroup;
  marqueId: Marque[] = [];
  typeId: TypeInterface[] = [];
  couleurId: Couleur[] = [];
  liste: Voiture[] = [];
  displayColumns: string [] = [
    'marque', 'type', 'couleur', 'date', 'observation', 'email', 'status', 'option1', 'option2'
  ];
  subVoiture: Subscription;

  constructor(
    private fb: FormBuilder,
    private vs: VoitureService,
  ) {
    this.initForm();
  }

  ngOnInit(): void {
    this.findVoiture();
  }

  ngOnDestroy() {
    if (this.subVoiture) {
      this.subVoiture.unsubscribe();
    }
  }

  initForm() {
    this.form = this.fb.group({
      marqueId: [null, Validators.required],
      typeId: [null, Validators.required],
      couleurId: [null, Validators.required],
      date:[null],
      observation: [null],
      email: [null, [Validators.required, Validators.email]]
    });
  }

  findVoiture() {
    this.subVoiture = this.vs.find<Voiture>().subscribe(
      (voitures: Voiture[]) => {
        this.liste = voitures;
        this.myTable.renderRows();
      }
    );
  }

  submit(value: Voiture) {
    if (this.voiture && this.voiture.id) {
      this.vs.edit(this.voiture.id, value).subscribe(
        () => this.findVoiture()
      )
    } else {
      this.vs.create(value).subscribe(
        () => this.findVoiture()
      );
    }

    this.onReset();
  }

  onReset() {
    this.carForm.resetForm();
    this.form.reset();
  }

  modifier(id: string) {
    this.vs.findById(id).subscribe(
      (voiture: Voiture) => {
        this.voiture = voiture;

        this.form.patchValue({
          marqueId: this.voiture.marque.id,
          typeId: this.voiture.type.id,
          couleurId: this.voiture.couleur.id,
          date: this.voiture.date,
          observation: this.voiture.observation,
          email: this.voiture.email
        })
      }
    );
  }

  supprimer(id: string) {
    this.vs.delete(id).subscribe(
      () => this.findVoiture()
    );
  }

  changeStatus(voiture) {
    this.vs.editDispo(voiture.id).subscribe(
      () => this.findVoiture()
    );
  }
}
