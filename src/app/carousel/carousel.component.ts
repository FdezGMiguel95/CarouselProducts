import { Component, OnInit } from '@angular/core';
import { ProductsService } from "../products.service";
import { IProducts } from '../models/product.model';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {

  products: IProducts[] = [];

  constructor(private _productsService: ProductsService) {  }

  ngOnInit(): void {
    this._productsService.getProducts().subscribe(data => {
      this.products = data
    })
  }
  nextProducts():void {
    const fg = document.getElementById('fg');
    const cards = document.getElementById('card-wrapper');
    cards?.scrollTo({
      left: cards.scrollLeft + 400,
      behavior: 'smooth',
    })
  }
  prevProducts() {
    const fg = document.getElementById('fg');
    const cards = document.getElementById('card-wrapper');
    cards?.scrollTo({
      left: cards.scrollLeft - 400,
      behavior: 'smooth',
    })
    }
}
