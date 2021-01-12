import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {
  base64File: string = null;
  filename: string = null;
  private file: File;

  constructor() { }

  ngOnInit(): void {
  }

  onFileSelect(fileChangeEvent: any): void {
    try {
      const file = fileChangeEvent.target.files[0];
      const fReader = new FileReader();
      fReader.readAsDataURL(file);
      fReader.onloadend = (event: any) => {
        this.filename = file.name;
        this.base64File = event.target.result;
      };
    } catch (error) {
      this.filename = null;
      this.base64File = null;
      console.log('no file was selected...');
    }

    this.file = fileChangeEvent.target.files[0];
  }

  async submitForm() {
    const formData = new FormData();
    formData.append('photo', this.file, this.file.name);

    try {
      const response = await fetch('http://localhost:3000/photos/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error(response.statusText);
      }
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  }
}
