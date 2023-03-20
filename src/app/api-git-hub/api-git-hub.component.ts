import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-repo-list',
  templateUrl: './api-git-hub.component.html',
  styleUrls: ['./api-git-hub.component.css']
})
export class ApiGitHubComponent {
  username = 'octocat'; // Agregar esta línea
  repositories: any[] = [];

  constructor(private http: HttpClient) { }

  getRepositories() {
    const url = `https://api.github.com/users/${this.username}/repos`;
    console.log(url)
    return this.http.get(url);

  }
}
console.log("hola")
