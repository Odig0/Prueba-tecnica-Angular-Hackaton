import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';

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
    myform = new FormGroup({
    name: new FormControl('', Validators.required)
    });
  
    onSubmit() {
      console.log(this.myform.value);
    }
    enviarWhatsapp() {
      const telefono = '59163525425'; // Reemplazar con el número de teléfono
      const mensaje = encodeURIComponent
      (`Hola ${this.name} tu inscripcion con carnet ${this.ci} fue exitosa`); // Reemplazar con el mensaje introducido en el formulario
      window.open(`https://wa.me/${telefono}?text=${mensaje}`, '_blank');
    }
  }

