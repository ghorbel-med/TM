import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { DocumentService } from '../service/document.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-searsh-component',
  templateUrl: './searsh-component.component.html',
  styleUrls: ['./searsh-component.component.css']
})
export class SearshComponentComponent implements OnInit {

  formdata;
  text;
  result =[];
  bool;

  constructor(private http: Http,public documentService: DocumentService) {
   }

  ngOnInit() {
      this.formdata = new FormGroup({
      text: new FormControl()
    });
    this.bool=false
  }

  onClickSubmit(data) {
    this.text = data.text;
    console.log("text = ",this.text);
    this.documentService.getResult(this.text).subscribe(data=>{
      this.result.push(data);
      console.log(this.result);
      
      this.bool=true
      //
    });;
    this.result=[]
    //console.log("aaaaaa",res);
  }

  verif(){
    return this.bool
  }

 
}
