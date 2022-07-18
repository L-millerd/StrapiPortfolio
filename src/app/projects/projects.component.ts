import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';
import { Projects } from '../interface';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects:any[] =[];
  // skills:any[]=[];
  server=environment.server;

  constructor(private cs: CommonService) { }

  ngOnInit(): void {
    this.cs.getProjects().subscribe( res => {
      console.log(res.data);
      this.projects = res.data;
      // this.skills = res.data.attributes.skills
      console.log(this.projects[0].attributes.skills.data[0].attributes.SkillName);
      console.log(this.projects[1].attributes.skills.data[0].attributes.SkillName);

      console.log(environment.server);
    })
  }

}
