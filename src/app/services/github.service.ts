import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class GithubService {
  username = '';
  private token = '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';
  private apiUrl = 'https://api.github.com';

  constructor(private http: HttpClient) { }

  getData(username: string): Observable<any> {
       // Reemplaza esto con tu token generado
  
      const headers = new HttpHeaders({
        Authorization: `Bearer ${this.token}`
      });
    const url = `https://api.github.com/users/${username}/repos`;
    return this.http.get<any>(url,{headers})
    // TODO no retornar un observable si no una promesa 
      //COMO OBTENER UN OBSERVABLE A PROMIS

    // const prueba = this.http.get<any>(url)
    // console.log(prueba)
  
    
  }  
 
}