import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  name='';
  message='';
  email='';
  formInvalid=true;
  formMessage=true;

  constructor( private cs: CommonService) { }

  submitLead(){
    let leaddata = {
      data:{
        "Name": this.name,
        "Email": this.email,
        "Message": this.message
      }
    }
    console.log(leaddata);
    this.cs.postLead(leaddata).subscribe( res=>{
      console.log(res)
      this.formMessage = false;
    })
  }

  resolved(event:any){
    // console.log(event);
    if(event){
      this.formInvalid=false;
    }
  }

  ngOnInit(): void {
  }

}
