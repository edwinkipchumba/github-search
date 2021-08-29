import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private username: string;

  constructor(private http:HttpClient) { 

  }
// access api key
  getData(){
    
    // return this.http.get("https://api.github.com/users/"+ this.username +"?client_id="+environment.api_key);
    return this.http.get("https://api.github.com/users/"+ this.username +"?access_token="+environment);


  }

  getRepos(){
    // return this.http.get("https://api.github.com/repos/"+this.username+"/repos?client_id="+environment.api_key);
    return this.http.get("https://api.github.com/users/"+this.username+"/repos?access_token="+environment);

  }

  getName(username:string){
    this.username=username;
  }
}
