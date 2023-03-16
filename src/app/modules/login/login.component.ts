import { LoginService } from './login.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor(
    private router: Router,
    private login: LoginService

  ){

  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('',  [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(10)
      ])
    });
  }

  onSubmit() {
    
    if (this.loginForm.valid) {
       this.login.logar(this.loginForm.value.username, this.loginForm.value.password).subscribe(logado=>
        {
          if(logado == true){
            this.router.navigate(["/stefamon"]);
          }
          
        }
      
        );
    
    } else {
      alert('Formulário inválido');
    }
  }

}
