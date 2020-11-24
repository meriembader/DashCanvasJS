import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UploadComponent } from './upload/upload.component';
import {HttpClientModule} from '@angular/common/http';
import {ProcessHTTPMsgService} from '../process-httpmsg.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { ApiService } from './api.service';
@NgModule({
  declarations: [
    AppComponent,
    UploadComponent,
    FileUploadComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
