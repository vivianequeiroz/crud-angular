import { Component, OnInit } from "@angular/core";
import { Product } from "../product.model";
import { ProductService } from "../product.service";

@Component({
  selector: "app-list-products",
  templateUrl: "./list-products.component.html",
  styleUrls: ["./list-products.component.css"],
})
export class ListProductsComponent implements OnInit {
  products: Product[];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.listAll().subscribe((products) => {
      this.products = products;
      console.log(products);
    });
  }
}
