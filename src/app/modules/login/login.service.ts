import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

 

  private readonly API = `${environment.urlBackend}/login`;
  constructor(private http: HttpClient) { }

  logar(username: any, password: any){
    return this.http.post<any>(this.API, {login:username, senha:password});
  }

  get(){
    return this.http.get(this.API);
  }

}
