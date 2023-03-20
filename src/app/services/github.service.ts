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