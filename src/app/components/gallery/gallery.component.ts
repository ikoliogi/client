import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';



@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  public gallery: any = [];
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://localhost:3000/photos').subscribe( response => {
      this.gallery = response;
      console.log(this.gallery);
    });

  }

}

