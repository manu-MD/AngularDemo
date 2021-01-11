import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-user-page-inscription',
  templateUrl: './user-page-inscription.component.html',
  styleUrls: ['./user-page-inscription.component.scss']
})
export class UserPageInscriptionComponent implements OnInit {

  constructor(
    private router: Router,
    private as: AuthService

  ) { }

  ngOnInit(): void {
  }

  submited(value) {
    console.log(value);
    this.as.login(value.email, value.password).subscribe(
      (res: any) => {
        localStorage.setItem('token', res.access_token);
        this.router.navigate(['/admin'])
      }
    )
  }
}
