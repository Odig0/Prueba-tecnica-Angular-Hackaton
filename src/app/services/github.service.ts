import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class GithubService {
  // username = 'facherito';
  

  constructor(private http: HttpClient) { }

  getData(username: string): Observable<any> {
      const token = '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'; // Reemplaza esto con tu token generado
  
      const headers = {
        'Authorization': `Bearer ${token}`
      };
    const url = `https://api.github.com/users/${username}/repos`;
    return this.http.get<any>(url,{headers})
    // TODO no retornar un observable si no una promesa 
      //COMO OBTENER UN OBSERVABLE A PROMIS

    // const prueba = this.http.get<any>(url)
    // console.log(prueba)
  
    
  }  
 
}