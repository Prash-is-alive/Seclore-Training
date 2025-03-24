import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.css']
})
export class ProductListingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  products!: any[];

  loadProducts() {
    this.products = [
      {
        name: "iPhone 15",
        price: 69000,
        imgUrl:
          "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/h/d/9/-original-imagtc2qzgnnuhxh.jpeg?q=70",
      },
      {
        name: "iPhone 16",
        price: 79000,
        imgUrl:
          "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/8/w/5/-original-imah4jyfwr3bfjbg.jpeg?q=70",
      },
      {
        name: "Samsung S24",
        price: 29000,
        imgUrl:
          "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/z/w/w/-original-imah4zp8pf2uehv4.jpeg?q=70",
      },
    ];
  }

}
