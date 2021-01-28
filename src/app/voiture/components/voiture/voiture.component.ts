import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { MatTable } from '@angular/material/table';
import { Voiture } from '../../interfaces/voiture.interface';
import { VoitureService } from '../../services/voiture.service';
import {FileUploadComponent} from '../../../shared/file-upload/file-upload.component';
import {MatDialog} from '@angular/material/dialog';
import {HttpClient} from '@angular/common/http';
import {AuthService} from '../../../user/services/auth.service';
import {Role} from '../../../user/interfaces/user.interface';

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
  liste: Voiture[] = [];
  displayColumns: string [] = [
    'marque', 'type', 'couleur', 'date', 'observation', 'email', 'status', 'option1', 'option2'
  ];
  subVoiture: Subscription;

  constructor(
    private fb: FormBuilder,
    private vs: VoitureService,
    public dialog: MatDialog,
    public as: AuthService,
    private http: HttpClient
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
      date: [null],
      observation: [null],
      email: [null, [Validators.required, Validators.email]],
      photo: [null]
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
    const formData: any = new FormData();
    console.log(value);
    for (const [key, data] of Object.entries(value)) {
      // console.log(`${key}: ${data}`);
      formData.append(key, data);
    }
    // console.log(formData.getAll());
    if (this.voiture && this.voiture.id) {
      this.vs.edit(this.voiture.id, formData).subscribe(
        () => this.findVoiture()
      );
    } else {
      this.vs.create(formData).subscribe(
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
          email: this.voiture.email,
          photo: this.voiture.photo
        });
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

  // openDialog() {
  //   this.dialog.open(FileUploadComponent);
  // }

  uploadFile(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({photo: file});
    this.form.get('photo').updateValueAndValidity();
  }

  get isAdmin() {
    return this.as && this.as.role === Role.Admin;
  }
}
