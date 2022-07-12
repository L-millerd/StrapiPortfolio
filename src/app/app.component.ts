import { Component } from '@angular/core';
import { CommonService } from './services/common.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MyPortfolio';
  logo = '';

  constructor (private cs: CommonService){}

  ngOnINit(): void{
    this.cs.getHomeContent().subscribe(res =>{
      this.logo = environment.server + res.data.attributes.Logo.data.attributes.formats.thumbnail.url;
    })
  }
}
