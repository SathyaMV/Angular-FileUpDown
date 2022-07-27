import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FileUploadModule} from 'ng2-file-upload';
import { AppComponent } from "../app/app.component";

import { HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule,FileUploadModule,HttpClientModule, ReactiveFormsModule],
    bootstrap: [AppComponent]
})
export class AppModule {

}