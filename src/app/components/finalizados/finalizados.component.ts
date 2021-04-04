import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Frete } from 'src/app/models/frete';
import { FreteService } from 'src/app/services/frete.service';

@Component({
  selector: 'app-finalizados',
  templateUrl: './finalizados.component.html',
  styleUrls: ['./finalizados.component.css']
})
export class FinalizadosComponent implements OnInit {

  listFinished: Frete[] = [];

  constructor(private service: FreteService, private router: Router) { }

  ngOnInit(): void {
    this.findAll();
    
  }

  findAll(): void {
    this.service.findAll().subscribe((resposta: any) => {
      resposta.forEach((frete: Frete) => {
        if(frete.status) {
          this.listFinished.push(frete);
        }
      })
    }) 
  }
  
  voltar(): void{
    this.router.navigate([''])
  }

}
