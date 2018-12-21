import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SearshComponentComponent } from './searsh-component/searsh-component.component';
import { UploadComponentComponent } from './upload-component/upload-component.component';
import {DocumentService} from './service/document.service'
import {CorpusService} from './service/corpus.service'
@NgModule({
  declarations: [
    AppComponent,
    SearshComponentComponent,
    UploadComponentComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [
    DocumentService,
    CorpusService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
