import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Marque } from '../interfaces/marque.interface';
import { MarquesService } from '../services/marques.service';

@Component({
  selector: 'app-field-marque',
  templateUrl: './field-marque.component.html',
  styleUrls: ['./field-marque.component.scss']
})
export class FieldMarqueComponent implements OnInit {

  marques$: Observable<Marque[]>;
  @Input() formGroup: FormGroup;
  @Input() controlName: string;
  @Input() category: string;


  constructor(
    private ms: MarquesService
  ) { }

  ngOnInit(): void {
    this.marques$ = this.ms.find({category: this.category});
  }

}
