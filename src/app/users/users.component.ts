import { Component, OnInit } from '@angular/core';
import { Users } from '../class/users';
import { GithubService } from '../service/github.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers:[GithubService]
})
export class UsersComponent implements OnInit {

  username: string;
  profile;
  work;

  showRepo=true;
  hideUser=false;


  // toggle
  toggleRepo(){
    this.showRepo=!this.showRepo;
    this.hideUser=!this.hideUser;
  }
  constructor(public dataService:GithubService, private router:Router){ 

  }
  
  // find profile
  findProfile(){
    this.dataService.getName(this.username);
    
    this.dataService.getData().subscribe(res => {
      console.log(res);
      this.profile=res;
    }, error => {
      this.profile=error;
      document.getElementById('name').style.color="red";
    });

    this.dataService.getRepos().subscribe(repo => {
      console.log(repo);
      this.work=repo;
    }, error => {
      this.work=null;
    });
  }


  ngOnInit(): void {
    this.username = 'edwinkipchumba';
    this.findProfile();
    
  }

}
