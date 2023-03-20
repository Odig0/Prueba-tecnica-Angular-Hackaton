import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private baseUrl = 'https://api.github.com';

  constructor(private http: HttpClient) { }

  getRepositories(username: string) {
    const url = `${this.baseUrl}/users/${username}/repos`;
    return this.http.get(url);
  }
}

