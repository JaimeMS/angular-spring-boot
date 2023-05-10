import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from './usuario';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string = "";
  password: string = "";
  loginError: boolean = false;
  cadastrando: boolean = false;
  mensagemSucesso: string = "";

  constructor (
    private router: Router,
    private authService: AuthService
  ) {}

  onSubmit() {
    this.router.navigate(['/home'])
  }

  preparaCadastrar(event: any) {
    event.preventDefault();
    this.cadastrando = true;
  }

  cancelaCadastro() {
    this.cadastrando = false;
  }

  cadastrar(){
    const usuario: Usuario = new Usuario();
    usuario.username = this.username;
    usuario.password = this.password;
    this.authService
        .salvar(usuario)
        .subscribe( response => {
          this.mensagemSucesso = "Cadastro realizado com sucesso! Efetue o Login!";
          this.loginError = false;
        }, error => {
          this.loginError = true;
          this.mensagemSucesso = "";
        })
  }
}
