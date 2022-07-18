import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  constructor(private cs:CommonService) { }

  ngOnInit(): void {
    this.cs.getSkills().subscribe( res => {
      console.log(res.data);
    })
  }

}
