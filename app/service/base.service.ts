import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class BaseService {

  constructor(public http: Http) { }

  protected callServiceMethodPost(methodName: string, body: any) {
    let headers = this.customRequestOptions();
    headers.append('Content-Type', 'application/json');
    headers = this.jwt(headers);
    let options = new RequestOptions({headers: headers});
    return this.http.post('http://localhost:9000/'+methodName, body, options)
    .map(this.extractData)
    .catch(this.handleError);
  }

  /*
  protected getAllUsJira(userStoryDto:any): Observable<any> {
    const headers: Headers = new Headers();
    const options = new RequestOptions({ headers: headers });
    return this.http
    .post( 'http://localhost:8080/Stage-1.0-SNAPSHOT/rest/jira/usJira', userStoryDto, options)
    .map(this.extractData)
    .catch(this.handleError.bind(this));
  }
  */

  private customRequestOptions(): Headers {
    return new Headers();
  }

  protected extractData(res: Response) {
    let body = res.json();
    if (body) {
      return body.data || body;
    } 
    else {
      return {};
    }
  }

  private handleError(error: any) {
    
    let errMsg = (error.message) ? error.message :
    error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

  private jwt(headers) {
    headers.append('Authorization', 'JSESSIONID '+sessionStorage.getItem("sessionId"));
    return headers;
  }
  
  protected clearSessionStorage() {
    sessionStorage.clear();
  }

  protected jwtToXHR(xhr: XMLHttpRequest) {
    let token = sessionStorage.getItem('currentToken');
    if (token) {
      xhr.setRequestHeader('Authorization', 'Bearer ' + token);
    }
    return xhr;
  }

}


