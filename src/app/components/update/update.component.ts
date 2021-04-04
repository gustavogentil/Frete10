import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FreteService } from 'src/app/services/frete.service';
import { Frete } from 'src/app/models/frete';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  frete: Frete = {
    
    descricao: '',
    origem: '',
    destino: '',
    valor: '',
    peso: '',
    dataOcorrencia: new Date(),
    status: false,
    ocorrencia: ''    
}

  constructor(private router: Router, private service: FreteService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.frete.id = this.route.snapshot.paramMap.get("id")!;
    this.findById();
  }

  findById(): void{
    this.service.findById(this.frete.id).subscribe((resposta) => {
      this.frete = resposta;
    })
  }

  update(): void{
    this.formataData()
    this.service.update(this.frete).subscribe((resposta) => {
      
      this.router.navigate(['']);
    }, error => {
     
      this.router.navigate(['']);
      }
    )
  }
  cancel(): void{
    this.router.navigate([''])
  }

  formataData(): void{
    let data = new Date(this.frete.dataOcorrencia)
    this.frete.dataOcorrencia = `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`
  }
}
