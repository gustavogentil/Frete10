import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Frete } from 'src/app/models/frete';
import { FreteService } from 'src/app/services/frete.service';

@Component({
  selector: 'app-read-all',
  templateUrl: './read-all.component.html',
  styleUrls: ['./read-all.component.css']
})
export class ReadAllComponent implements OnInit {

  closed = 0;

  list: Frete[] = [];
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
      else{
        this.list.push(frete);
      }
    })
   this.closed = this.listFinished.length; 
  })
}
  
  finalizar(item: Frete): void{
    item.status = true;
    this.service.update(item).subscribe(( ) => {
      this.list = this.list.filter(frete => frete.id !== item.id);
      this.closed++;
    });
  }
  delete(id: any):void {
    this.service.delete(id).subscribe((resposta) => {
      if(resposta === null){
        
        this.list = this.list.filter(frete => frete.id !== id);
      }
    })
  }

  navegarParaFinalizados(): void {
    this.router.navigate(['entregue'])
  }
  
}
