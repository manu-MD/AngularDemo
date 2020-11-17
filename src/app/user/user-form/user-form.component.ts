import { Component, OnInit, OnDestroy, Input, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { User } from '../interfaces/user.interface';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-form', 
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnChanges, OnDestroy {

  @Input() user: User;  // Rempli uniquement en mode modification
  @Output() submited: EventEmitter<any> = new EventEmitter<any>();
  
  form: FormGroup; 
  hide = true;
  subUser: Subscription;

  constructor(
    private fb: FormBuilder,
    private us: UserService,
  ) {
    this.initForm();
   }

   ngOnChanges(values: SimpleChanges) {
     if (values['user'] && values['user'].currentValue) {
       this.user = values['user'].currentValue;
        console.log("élément reçu à modifier", this.user);
       this.form.patchValue({ 
         email: this.user.email,
         lastName: this.user.lastName,
         firstName: this.user.firstName
       });
     }
   }

  submit(value : User) {
    if ( this.user && this. user.id) {
      this.us.edit(this.user.id, value).subscribe(
        () =>{
          console.log("élément modifié et envoi de l'emit");
          this.submited.emit();

        }
      )
    } else{
      this.us.create(value).subscribe(
        () => {           
          console.log("élément créé et envoi de l'emit");
          this.submited.emit(value);
        }
      );
    }
    this.onReset();
  };

  onReset() {
    this.form.reset();
  }
  
  ngOnDestroy() {
    if (this.subUser) {
      this.subUser.unsubscribe();
    }
  }

  initForm() {
    this.form = this.fb.group({
      lastName: [null, Validators.required],
      firstName: [null, Validators.required],
      email: [ null, [Validators.required, Validators.email]],
      password: [null, Validators.required],   
    });
  }
}
