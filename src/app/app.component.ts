import { Component } from '@angular/core';
import {InfoService} from './service/info.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  profile

  constructor(private info:InfoService){
    //first way
  // this.info.getUser().subscribe(profile =>{
  //   this.profile = profile
    
  // })

  //second way
  this.info.getInfo().subscribe(res=>{
    this.profile = res.json()
  })

        }
  }


  

