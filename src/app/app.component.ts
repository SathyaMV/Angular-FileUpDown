import { Component } from '@angular/core';
import { FileSelectDirective, FileUploader} from 'ng2-file-upload';
import { FileService } from './file.service';
import {saveAs} from 'file-saver';
import { FormBuilder, Validators } from '@angular/forms';
import { fileExtensionValidator } from './file-extension-validator.directive';

const uri = 'http://localhost:3000/file/upload';
@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers:[FileService]
})
export class AppComponent {
    acceptedExtensions = "jpg, jpeg, png";

    uploader:FileUploader = new FileUploader({url:uri});

    attachmentList:any = [];

    fileSize;
    file;

    constructor(private formBuilder: FormBuilder,private _fileService:FileService){

        this.uploader.onCompleteItem = (item:any, response:any , status:any, headers:any) => {
            this.attachmentList.push(JSON.parse(response));
        }
    }

    download(index){
        var filename = this.attachmentList[index].uploadname;

        this._fileService.downloadFile(filename)
        .subscribe(
            data => saveAs(data, filename),
            error => console.error(error)
        );
    }
    
    formValue = this.formBuilder.group({
        file: ['', [Validators.required, fileExtensionValidator(this.acceptedExtensions)]]
    })

    get fname() { return this.formValue.get('file'); }

    fileSelected($event) {

        //Property 'files' does not exist on type 'HTMLElement'
        let file = $event.target.files[0];
        this.file = file;
    
        if (file) {
          let fileSize = 0;
          if (file.size > 1024 * 1024)
            this.fileSize = (Math.round(file.size * 100 / (1024 * 1024)) / 100).toString() + 'MB';
          else
            this.fileSize = (Math.round(file.size * 100 / 1024) / 100).toString() + 'KB';
        }
      }
}