import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css']
})
export class Page3Component implements OnInit {
  formData = {}
  constructor(private http:HttpService) { }

  ngOnInit() {
    this.formData = this.http.getForm()
    console.log(this.formData)
  }

}
