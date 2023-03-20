import { Component } from '@angular/core';
import { GithubService } from '../services/github.service';

@Component({
  selector: 'app-tabla-repositorios',
  templateUrl: './tabla-repositorios.component.html',
  styleUrls: ['./tabla-repositorios.component.css']
})
export class TablaRepositoriosComponent  {
  title = 'Hackaton';
  username = '';
  repositories: any[] = [];

  constructor(private githubService: GithubService) {}

  getRepositories(): void {
    this.githubService.getData(this.username).subscribe(data => {
      this.repositories = data;
    });
  }

  ngOnInit(): void {
    this.getRepositories();
  }
}


