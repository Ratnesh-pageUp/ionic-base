import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent  implements OnInit {

  categoryArr:string[] = ["Women's Clothing","Men's Clothing:","Kids' Clothing","Footwear","Accessories"]

  constructor() { }

  ngOnInit() {}

}
