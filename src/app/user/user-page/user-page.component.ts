import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from '../interfaces/user.interface';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit, OnDestroy {

  user: User;
  users: User[];
  private subUser: Subscription

  constructor(
    private us: UserService
  ) { }

  ngOnInit(): void {
    this.findUser();
  }
  
  ngOnDestroy() {
    if (this.subUser) {
      this.subUser.unsubscribe();
    }
  }

  findUser() {
    this.subUser = this.us.find<User>().subscribe(
      (users: User[]) => {
        this.users = users;
      }
    )
  }

  submited() {
    console.log("évènement créé ou modifié");
    this.findUser();
    this.user = null;
  }
  
  toUpdate(user: User) {
    console.log("élément à modifier", user);    
    this.user = user;
  }

}
