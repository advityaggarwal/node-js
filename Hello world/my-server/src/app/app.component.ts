import { Component } from '@angular/core';
import { ServiceService } from './service.service';
import {HttpClient} from '@angular/common/http';
import { Observable } from '../../node_modules/rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-server';

constructor(private _service:ServiceService){}


data:any;
name:string;
age:number;
  getmethod():any
  {
    return this._service.getdata().subscribe((data)=>{this.data=data;
  
    console.log("SERVICE "+data.name);
    this.name=data.name;
    })
  }

  postmethod()
  {
    console.log("hgsdagh")
    return this._service.postdata(this.name,this.age).subscribe((data)=>{this.data=data;
    console.log("SERVICE "+JSON.stringify(data));
   
    });
  }
}
