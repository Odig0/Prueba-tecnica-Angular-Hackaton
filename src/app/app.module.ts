import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { GithubService } from './servicios/GithubService';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ApiGitHubComponent } from './api-git-hub/api-git-hub.component';
import { GitHubComponent } from './git-hub/git-hub.component';
import { TablaRepositoriosComponent } from './tabla-repositorios/tabla-repositorios.component';
import { MapaComponent } from './mapa/mapa.component';
// import { WhatsAppService } from './whatsapp-services/whats-app.service';


@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    ApiGitHubComponent,
    GitHubComponent,
    TablaRepositoriosComponent,
    MapaComponent   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    GithubService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
