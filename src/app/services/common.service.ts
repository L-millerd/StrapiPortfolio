import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HomePage, Projects } from '../interface';
import { environment } from 'src/environments/environment';
import { Skills } from '../interface';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  // private url = "https://squid-app-sca5s.ondigitalocean.app";
  private url = environment.server;
  constructor(private http: HttpClient) { }

  getHomeContent(){
    return this.http.get<HomePage>(this.url + '/api/about-me?populate=deep,3');
  }

  postLead(data:any){
    return this.http.post(this.url + '/api/leads', data )
  }

  getSkills(){
    return this.http.get<Skills>(this.url + '/api/skills?populate=deep,2');
  }

  getProjects(){
    return this.http.get<Projects>(this.url + '/api/projects?populate=deep,2');
  }

//   postLead(name:string, email: string, message: string){
//     let leaddata={
//       "Name" : name,
//       "Email": email,
//       "Message": message
// ,    }
//     return this.http.post(this.url + '/api/leads', leaddata )
//   }
}

