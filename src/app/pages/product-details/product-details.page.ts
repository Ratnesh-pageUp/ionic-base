import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
})
export class ProductDetailsPage implements OnInit {

  history = history;

  constructor() { }

  ngOnInit() {
  }

  buyNow(){
    console.log("hello")
  }

}
