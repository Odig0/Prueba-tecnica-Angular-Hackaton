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
  selectedRepositories: any[] = [];

  constructor(private githubService: GithubService) {}

  getRepositories(): void {
    this.githubService.getData(this.username).subscribe(data => {
      this.repositories = data;
    });
  }

  ngOnInit(): void {
    this.getRepositories();
  }
  saveSelected(nombreRepositorios: string): void {
    const selectedRepo = this.repositories.find(repo => repo.name === nombreRepositorios);
    if (selectedRepo) {
      this.selectedRepositories.push(selectedRepo);
    }
  }
  deleteSelected(nombreRepositorios: string): void {
    this.selectedRepositories = this.selectedRepositories.filter
    (repo => repo.name !== nombreRepositorios);
  }
  verifyRepositories(): void {
    if (this.selectedRepositories.length > 2) {

      alert('Deben haber maximo solo dos repositorios seleccionados');
    } else {
      console.log('Porfavor seleccione al menos un repositorio');
    }
  }
}
  
// this.repositories = esa variable contiene los repositories
// crear un segundo array y en base a nombre del repository copiar 
//al segundo array el seleccionado utilizando el nombre funcion de los repositories ifind map
//
