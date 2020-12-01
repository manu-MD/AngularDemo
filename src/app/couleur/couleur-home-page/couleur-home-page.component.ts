import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Couleur} from '../../shared/interfaces/couleur.interface';
import {CouleursService} from '../../shared/services/couleurs.service';
import {Subscription} from 'rxjs';
import {MatTable} from '@angular/material/table';
import {Bateau} from '../../bateau/interfaces/bateau.interface';

@Component({
  selector: 'app-couleur-home-page',
  templateUrl: './couleur-home-page.component.html',
  styleUrls: ['./couleur-home-page.component.scss']
})
export class CouleurHomePageComponent implements OnInit {
  @ViewChild(MatTable) myTable: MatTable<Couleur[]>;

  form: FormGroup;
  couleur: Couleur;
  couleurs: Couleur[] = [];
  categories: any[] = [
    {value: 'Voiture'},
    {value: 'Moto'},
    {value: 'Bateau'},
    {value: 'Camion'}
  ];
  subColor: Subscription;

  displayColumns: string[] = [
    'couleur', 'option2'
  ];

  constructor(
    private fb: FormBuilder,
    private cs: CouleursService
  ) {
    this.initForm();
  }

  ngOnInit(): void {
    this.cs.find().subscribe(
      (couleurs: Couleur[]) => this.couleurs = couleurs
    );
  }

  initForm() {
    this.form = this.fb.group({
      couleur: [null, Validators.required],
      // category: [null, Validators.required]
    });
  }

  findColor() {
    this.subColor = this.cs.find<Couleur>().subscribe(
      (couleurs: Couleur[]) => {
        this.couleurs = couleurs;
        this.myTable.renderRows();
        console.log(couleurs);
      }
    );
  }

  submit(value: Couleur) {
    console.log(this.couleur);
    if (this.couleur && this.couleur.id) {
      this.cs.edit(this.couleur.id, value).subscribe(
        () => this.findColor()
      );
    } else {
      console.log('méthode submit', value);
      this.cs.create(value).subscribe(
        () => this.findColor()
      );
    }
  }

  supprimer(id: string) {
    console.log('méthode delete', id);
    this.cs.delete(id).subscribe(
      () => this.findColor()
    );
  }
}
