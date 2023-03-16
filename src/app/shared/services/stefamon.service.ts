import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StefamonService {

  constructor(
    private http: HttpClient
  ) { }

  list(): Observable<any> {
    return this.http.get(`${environment.urlBackend}/stefamon/todos`);
  }

}
