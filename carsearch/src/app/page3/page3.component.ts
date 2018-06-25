import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css']
})
export class Page3Component implements OnInit {
  formData = {}
  discount = 0
  constructor(private http:HttpService) { }

  ngOnInit() {
    this.formData = this.http.getForm()
    var date = new Date(this.formData['purchaseDate']);
    console.log(date.getDate() % 2);
    this.discount = date.getDate() % 2 == 0 ? 30 : 40
    console.log(this.formData)
  }

}
