import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Couleur } from '../interfaces/couleur.interface';
import { CouleursService } from '../services/couleurs.service';

@Component({
  selector: 'app-field-color',
  templateUrl: './field-color.component.html',
  styleUrls: ['./field-color.component.scss']
})
export class FieldColorComponent implements OnInit {

  colors$: Observable<Couleur[]>;
  @Input() formGroup: FormGroup;
  @Input() controlName: string;
  
  constructor(
    private cs: CouleursService
  ) {
  }

  ngOnInit(): void {
    this.colors$ = this.cs.find();
  }

}
