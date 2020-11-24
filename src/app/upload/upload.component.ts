import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  url = 'http://127.0.0.1:5000';
  file: File = null;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  }
  envoiFichier (fichiers: FileList) {
    this.file = fichiers.item(0);
    // console.log('envoiFichier', this.file);
    this.postFile(this.file).subscribe(resultat => { console.log('Envoi effectué avec succes');
    }, erreur => {
      console.log('Erreur lors de l\'envoi du fichier : ', erreur);
    },
      () => console.log('Complete'));
  }

  postFile(file: File): Observable<any> {
    console.log('post_file', file);
    const headers = new Headers();
    headers.append('Content-Type', 'multipart/form-data');
    const httpOptions = {
      headers
    };


    const formData: FormData = new FormData();
    formData.append('file',  file, file.name);
    // console.log(file);
    // console.log(file.name);
    // console.log(formData);
     // @ts-ignore
    return this.http.post(this.url + '/predict', formData, httpOptions);
  }
}
