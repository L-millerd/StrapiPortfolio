import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HomePage } from '../interface';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private url = "http://localhost:1337";

  constructor(private http: HttpClient) { }

  getHomeContent(){
    return this.http.get<HomePage>(this.url + '/api/about-me?populate=deep,3');
  }
}
