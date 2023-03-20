import { Component } from '@angular/core';
import { GithubService } from '../services/github.service';

@Component({
  selector: 'app-git-hub',
  templateUrl: './git-hub.component.html',
  styleUrls: ['./git-hub.component.css']
})
export class GitHubComponent {
  repos: any[] = [];

  constructor(private githubService: GithubService) {}

 
}

