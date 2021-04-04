import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Frete } from 'src/app/models/frete';
import { FreteService } from 'src/app/services/frete.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  frete: Frete = {
    id: '',
    descricao: '',
    origem: '',
    destino: '',
    valor: '',
    peso: '',
    dataOcorrencia: new Date(),
    status: false,
    ocorrencia: ''    
}
  constructor(private router: Router, private service: FreteService) { }

  ngOnInit(): void {
  }
  create(): void{
    this.formataData()
    this.service.create(this.frete).subscribe((resposta) => {
     
      this.router.navigate(['']);
    }, err => {
      
      this.router.navigate(['']);
    })
  }
  cancel(): void{
    this.router.navigate([''])
  }

  formataData(): void{
    let data = new Date(this.frete.dataOcorrencia)
    this.frete.dataOcorrencia = `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`
  }
}
