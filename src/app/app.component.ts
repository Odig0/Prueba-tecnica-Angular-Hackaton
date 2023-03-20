import { Component } from '@angular/core';
import { GithubService } from './services/github.service'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hackaton';
  // username: string;
  username = '';  
  usersPromise: Promise<any> = Promise.resolve();
  constructor(private githubService: GithubService){
    // this.username = '';
  }
  
  
  
  getUsers(): Promise<any> {
    return this.githubService.getData(this.username).toPromise();
  }
  // ngOnInit() {
  //   console.log(this.username)
  // }
  
   ngOnInit(): void {
     this.usersPromise = this.getUsers();
     this.usersPromise.then(data => {
       console.log(this.usersPromise);
     });
  }

  hacerSolicitud() {
      const url = 'https://api.github.com/users/CamiloClaure/repos';
      const token = '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'; // Reemplaza esto con tu token generado
  
      const headers = {
        'Authorization': `Bearer ${token}`
      };
        
      
    }
  }


// }


  // getUsers(){
  //   this.githubService.getData().subscribe((data) =>{
  //     console.log(data);
  //   })
  // }
  
  // ngOnInit(): void {
  //   console.log(this.getUsers())
  // }
