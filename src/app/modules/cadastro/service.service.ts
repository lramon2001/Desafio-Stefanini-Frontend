import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  
  private readonly API = `${environment.urlBackend}/jogador`;
  constructor(private http: HttpClient) { }

  cadastrar(username: any, password: any){
    return this.http.post<any>(this.API, {nickname:username, password:password});
  }

  get(){
    return this.http.get(this.API);
  }

}
