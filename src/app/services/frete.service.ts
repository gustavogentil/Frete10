import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Frete } from '../models/frete';

@Injectable({
  providedIn: 'root'
})
export class FreteService {

  baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) { }

  findAll(): Observable<Frete[]> {
    return this.http.get<Frete[]>(this.baseUrl);
  }
  update(frete: Frete): Observable<Frete>{
    const url = `${this.baseUrl}/${frete.id}`
    return this.http.put<Frete>(url, frete);
  }
}
