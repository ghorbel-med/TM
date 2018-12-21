import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CorpusService } from '../service/corpus.service';

@Component({
  selector: 'app-upload-component',
  templateUrl: './upload-component.component.html',
  styleUrls: ['./upload-component.component.css']
})
export class UploadComponentComponent implements OnInit {

  file: File;
  titre: string;
  formdata: FormData= new FormData();
  errorMessage: string;

  fileChange(event) {
    let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      this.file = fileList[0];
      let fileSize: number = fileList[0].size;
      console.log(this.file.name);
      this.formdata.append('file', this.file);
      //this.publier()
    }
   


  }

  constructor(public documentService: CorpusService) { }

  ngOnInit() {

  }

  publier(){
    this.formdata.append('titre', this.titre);
    this.documentService.getResult(this.formdata).subscribe(res => {
      console.log('start download:',res);
      res.name = "result.txt"
      var url = window.URL.createObjectURL(res);
      var a = document.createElement('a');
      document.body.appendChild(a);
      a.setAttribute('style', 'display: none');
      a.href = url;
      a.download = "result.txt";
      a.click();
      window.URL.revokeObjectURL(url);
      a.remove(); // remove the element
    }, error => {
      console.log('download error:', JSON.stringify(error));
    }, () => {
      console.log('Completed file download.')
    });
   
  }

}
