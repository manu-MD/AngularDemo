import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-page-login',
  templateUrl: './user-page-login.component.html',
  styleUrls: ['./user-page-login.component.scss']
})
export class UserPageLoginComponent implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private us: UserService,
    private as: AuthService,
    private router: Router
  ) { 
    this.initForm();
  }

  ngOnInit(): void {
  }
  // initialisation du formulaire 
  initForm() {
    this.form = this.fb.group({
      email: ['ju@ju.fr', [Validators.required]],
      password: ['ju', [Validators.required]]
    })
  }

  submit(value) {
    this.as.login(value.email, value.password).subscribe(
      (res: any) => {
        // retour OK 200, on récupère l'accès token et on le stock dans le localStorage
        localStorage.setItem('token', res.access_token);
        // redirection vers la page d'accueil de la partie privée
        this.router.navigate(['/in'])
      }
    )
  }

  onReset() {
    this.form.reset();
  } 

}
