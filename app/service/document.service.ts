import { Injectable } from '@angular/core';

import {Http, Headers, RequestOptions, Response} from '@angular/http';

import {BaseService} from "./base.service";
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DocumentService extends BaseService {

  constructor(public http: Http) { super(http); }

  getResult(text: String): Observable<any>{
    return this.callServiceMethodPost("doc",{"doc":text});
    //return this.http.post("http:/localhost:9000/doc",{"doc":text}).map((res: Response)=> res.json());
  }

}
