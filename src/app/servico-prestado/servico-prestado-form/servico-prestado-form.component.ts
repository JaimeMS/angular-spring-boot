import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/clientes/cliente';
import { ClientesService } from 'src/app/clientes.service';
import { ServicoPrestado } from '../ServicoPrestado';

@Component({
  selector: 'app-servico-prestado-form',
  templateUrl: './servico-prestado-form.component.html',
  styleUrls: ['./servico-prestado-form.component.css']
})
export class ServicoPrestadoFormComponent implements OnInit {

  clientes: Cliente[] = [];
  servico: ServicoPrestado;

  constructor(
    private clienteService: ClientesService
  ) { 
    this.servico = new ServicoPrestado();
  }

  ngOnInit(): void {
    //com este método, quando entrar na tela o componente já exibe a lista de clientes atualizada
    this.clienteService
          .getClientes()
          .subscribe(response => this.clientes = response);
   }

   onSubmit(){
    console.log(this.servico);
   }
}
