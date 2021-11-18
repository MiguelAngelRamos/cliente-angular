import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/interfaces/clienteinterface';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  public Clientes: Cliente[]=[];

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.clienteService.getClientes().subscribe(data => {
      this.Clientes = data;
      console.log(this.Clientes);
    });

  }

}
