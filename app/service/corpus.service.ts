import { Injectable } from '@angular/core';

import {Http, Headers, RequestOptions, Response, ResponseContentType} from '@angular/http';

import {BaseService} from "./base.service";
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CorpusService extends BaseService {

  constructor(public http: Http) { super(http); }

  getResult(file: FormData): Observable<any>{
    let options = new RequestOptions({responseType: ResponseContentType.Blob});
    return this.http.post("http://localhost:9000/file",file,options ).map((res: Response) => <Blob>res.blob())  ;
    //return this.http.post("http:/localhost:9000/doc",{"doc":text}).map((res: Response)=> res.json());
  }

}
