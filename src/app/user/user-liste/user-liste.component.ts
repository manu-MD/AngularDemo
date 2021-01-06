import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatTable } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { User } from '../interfaces/user.interface';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-liste',
  templateUrl: './user-liste.component.html',
  styleUrls: ['./user-liste.component.scss']
})
export class UserListeComponent implements OnChanges {

  @Input() users: User[] = [];
  @ViewChild(MatTable) myTable: MatTable<User[]>;
  @Output() updated: EventEmitter<User> = new EventEmitter<User>();
  @Output() deleted: EventEmitter<any> = new EventEmitter<any>();

  user: User;
  form: FormGroup;
  subUser: Subscription;
  displayColumns: string[] = [
    'firstName', 'lastName', 'email', 'role', 'option1', 'option2'
  ];

  constructor(
    private us: UserService
  ) { }

  ngOnChanges(values: SimpleChanges) {
    if (values.users && values.users.currentValue) {
      this.users = values.users.currentValue;
      console.log('refresh des users', this.users);

    }
  }

  modifier(user: User) {
    console.log('élément à modifier depuis la liste', user);
    this.updated.emit(user);

  }

  supprimer(id: string) {
    this.us.delete(id).subscribe(
      () => {
        console.log('élément de la liste supprimé et envoi de l\'emit');
        this.deleted.emit();
      });
  }
}
