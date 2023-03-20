import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { GithubService } from '../services/github.service';


// import { WhatsAppService } from '../whatsapp-services/whats-app.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent { 
    date: Date = new Date();
    edadValida: boolean = true;
    lastname: string = '';
    name: string = '';
    ci: number = 0;
    borndate: string = "";
    number: number = 0;
    address: string = "";
    mensaje = '';
    // date: string = '';
    user = '';
    title = 'Hackaton';
    username = '';
    repositories: any[] = [];
    selectedRepositories: any[] = [];
    repo: any[] = [];
    myform = new FormGroup({
    user: new FormControl('')     
    });
    constructor(private githubService: GithubService) {}

    getRepositories(): void {
      this.githubService.getData(this.username).subscribe(data => {
        this.repositories = data;
      });
    }
  
    ngOnInit(): void {
      this.getRepositories();

    }
    saveSelected(nombreRepositorios: string, e: any): void {
      const selectedRepo = this.repositories.find(repo => repo.name === nombreRepositorios);
    
      if (e.target.checked) {
        this.selectedRepositories.push(selectedRepo);
      } 
      else  if (this.selectedRepositories.length === 0) {
        alert("No repositories selected");
      }
      else {
        this.deleteSelected(nombreRepositorios);
      }
    }
    
    deleteSelected(nombreRepositorios: string): void {
      this.selectedRepositories = this.selectedRepositories.filter(repo => repo.name !== nombreRepositorios);
    }
    
    
    // verifyRepositories(): void {
    //   if (this.selectedRepositories.length > 2) {
  
    //     alert('Deben haber maximo solo dos repositorios seleccionados');
    //   } else {
    //     alert('Porfavor seleccione al menos un repositorio');
    //   }
    // }
    
  
    onSubmit() {
      console.log(this.myform.value);
    }
    
    sentMessage() {
      const selectedRepoCount = this.selectedRepositories.length;
      if (selectedRepoCount <= 2 && selectedRepoCount!=0) {
      const telefono = '59163525425'; // Reemplazar con el número de teléfono
      const mensaje = encodeURIComponent
      (`Hola ${this.user} tu inscripcion con carnet ${this.ci} fue exitosa`); // Reemplazar con el mensaje introducido en el formulario
      window.open(`https://wa.me/${telefono}?text=${mensaje}`, '_blank');
      console.log(this.user)
    }

    else {
      alert('Por favor seleccione al menos uno o maximo 2 repositorios para enviar el formulario.');
    }
  }
    guardar() {
      console.log(this.name); // Muestra el valor del campo input
      // Aquí puedes hacer cualquier cosa con el valor del campo input
    }
    validarEdad() {
      const fechaActual = new Date();
      const fechaNacimiento = new Date(this.date);
      let age = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
      const month = fechaActual.getMonth() - fechaNacimiento.getMonth();
      if (month < 0 || (month === 0 && fechaActual.getDate() < fechaNacimiento.getDate())) {
        age--;
      }
      this.edadValida = age > 30;
    }
}





