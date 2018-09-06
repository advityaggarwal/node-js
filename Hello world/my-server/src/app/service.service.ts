import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from '../../node_modules/rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private _http:HttpClient) { }

  private _url='http://localhost:8081/rest/api/read/';
  getdata():Observable<any>
  {
    return this._http.get(this._url);
  }
  postdata(ename:string,eage:number):Observable<Object>
  {
    //console.log("jfgd");
    return this._http.post(this._url,{
      val:{name:ename},
      body:{
        name:ename,
        age:eage}
    });
  }
}
