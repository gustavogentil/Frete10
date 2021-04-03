import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Frete } from 'src/app/models/frete';
import { FreteService } from 'src/app/services/frete.service';

@Component({
  selector: 'app-read-all',
  templateUrl: './read-all.component.html',
  styleUrls: ['./read-all.component.css']
})
export class ReadAllComponent implements OnInit {

  list: Frete[] = [];
  frete: Frete = {
    status: false,ocorrencia: '',descricao:'',origem:'', destino:'', peso:'', dataOcorrencia: ''
    }
  constructor(private router: Router, private service: FreteService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.frete.id = this.route.snapshot.paramMap.get("id")!;
    this.findAll();

  }

  findAll(): void{
    this.service.findAll().subscribe((resposta) => {
      this.list = resposta;
    })
  }
  finalizar(item: Frete): void{
    item.status = true;
    this.service.update(item).subscribe(( ) => {

    });
  }
  update(): void{
    
    this.service.update(this.frete).subscribe((resposta) => {
     this.router.navigate(['']);
    }, error => {
      
      this.router.navigate(['']);
      }
    )
  }
}
