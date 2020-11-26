import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTable } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Marque } from 'src/app/shared/interfaces/marque.interface';
import { MarquesService } from 'src/app/shared/services/marques.service';

@Component({
  selector: 'app-marque-home-page',
  templateUrl: './marque-home-page.component.html',
  styleUrls: ['./marque-home-page.component.scss']
})
export class MarqueHomePageComponent implements OnInit {

  @ViewChild(MatTable) myTable: MatTable<Marque[]>;

  form: FormGroup;
  marque: Marque;
  marques: Marque[] = [];
  categories: any[] = [
    {value: 'Voiture'},
    {value: 'Moto'},
    {value: 'Bateau'},
    {value: 'Camion'}
  ];
  displayColumns: string[] = [
    'name', 'category','option1', 'option2'
  ];
  subMarque: Subscription;

  constructor(
    private fb: FormBuilder,
    private ms: MarquesService

  ) {
    //on appelle l'intialisation du formulaire
    this.initForm();
  }

  //c'est la 1ère méthode appelée lors de la construction du composant(règle d'Angular)
  ngOnInit(): void {
    //sert à récupérer le tableau de marques pour les afficher dans la liste
    this.ms.find().subscribe(
      (marques: Marque[]) => this.marques = marques
    );
  }
  
  ngOnDestroy() {
    if (this.subMarque) {
      this.subMarque.unsubscribe();
    }
  }
  //initialise le formulaire
  initForm() {
    this.form = this.fb.group({
      name: [null, Validators.required],
      category: [null, Validators.required]
    });
  }
  
  findMarque() {
    this.subMarque = this.ms.find<Marque>().subscribe(
      (marques: Marque[]) => { 
        this.marques = marques;
        this.myTable.renderRows();
      }
    );    
  }
  // valide et envoie le formulaire rempli vers l'API
  submit(value: Marque) {
    console.log(this.marque);
    if (this.marque && this.marque.id) {
      this.ms.edit(this.marque.id, value).subscribe(
        () => this.findMarque()
      )
    } else {
    // console.log('appel de la méthode submit', value);
    // appelle l'API de création de marque
      this.ms.create(value).subscribe(
        () => this.findMarque()
      );
    }
  }

  // modifie et remplace la nouvelle marque créée en BDD
  modifier(id: string) {       
    this.ms.findById(id).subscribe(
      (marque: Marque) => {
        console.log(marque);
        this.marque = marque;

        this.form.patchValue({
          name: this.marque.name,
          category: this.marque.category
        })
      }
    )
  }
  // supprime une marque de la BDD
  supprimer(id: string) {
    this.ms.delete(id).subscribe(
      () => this.findMarque()
    )
  }

  getMarque(l) {
    return 'name';
  }
}