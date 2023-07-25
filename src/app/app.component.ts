import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'avnon-interview';

  uploadFile(event: any, fileUpload: any) {
    console.log(event, fileUpload)

    // for (let file of event.files) {
    //   this.uploadedFiles.push(file);
    // }

    // this.uploadFileService.doSomething(this.uploadedFiles[0]).subscribe(x => {
    //   this.fileInfo = x;
    //     ..do some stuff..

    // });

    fileUpload.clear(); // this will clear your file
  }
}
