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
  findById(id: any): Observable<Frete>{
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Frete>(url);
  }

  update(frete: Frete): Observable<Frete>{
    const url = `${this.baseUrl}/${frete.id}`
    return this.http.put<Frete>(url, frete);
  }
  delete(id: any):Observable<void>{
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<void>(url);
  }

  create(frete: Frete):Observable<Frete>{
    return this.http.post<Frete>(this.baseUrl, frete);
  }

}
function frete<T>(url: string, frete: any): Observable<Frete> {
  throw new Error('Function not implemented.');
}

