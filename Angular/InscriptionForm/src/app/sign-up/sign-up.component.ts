import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent {

  // submitted: boolean = false;

  model: User = new User('', '', '', '');

  OnSubmit(): void {
    // this.submitted = true;
    console.log(this.model)
  }

}

export class User {

  Nom: string = "";
  Prenom: string = "";
  Email: string = "";
  Password: string = "";


  constructor(Nom: string, Prenom: string, Email: string, Password: string) {
    this.Nom = Nom;
    this.Prenom = Prenom;
    this.Email = Email;
    this.Password = Password;
  }

}
