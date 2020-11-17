import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { TypeInterface } from '../interfaces/typeInterface.interface';
import { TypesService } from '../services/types.service';

@Component({
  selector: 'app-field-type',
  templateUrl: './field-type.component.html',
  styleUrls: ['./field-type.component.scss']
})
export class FieldTypeComponent implements OnInit {

  types$: Observable<TypeInterface[]>;
  @Input() formGroup: FormGroup;
  @Input() controlName: string;
  @Input() category: string;

  constructor(
    private ts: TypesService
  ) { }

  ngOnInit(): void {
    this.types$ = this.ts.find({category: this.category});
  }

}
