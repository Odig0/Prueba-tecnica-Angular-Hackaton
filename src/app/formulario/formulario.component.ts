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
    name: string = '';
    lastname: string = '';
    ci: number = 0;
    borndate: string = "";
    number: number = 0;
    address: string = "";
    mensaje = '';
    date: string = '';
    username = 'sds';
    repositories: any[] = [];
    myform = new FormGroup({
    username: new FormControl('')

    });

    
  
    onSubmit() {
      console.log(this.myform.value);
    }
    
    enviarWhatsapp() {
      const telefono = '59163525425'; // Reemplazar con el número de teléfono
      const mensaje = encodeURIComponent
      (`Hola ${this.username} tu inscripcion con carnet ${this.ci} fue exitosa`); // Reemplazar con el mensaje introducido en el formulario
      window.open(`https://wa.me/${telefono}?text=${mensaje}`, '_blank');
      console.log(this.username)
    }
    guardar() {
      console.log(this.name); // Muestra el valor del campo input
      // Aquí puedes hacer cualquier cosa con el valor del campo input
    }
    constructor(private githubService: GithubService) {}


}


    
//funcion de validacion 
