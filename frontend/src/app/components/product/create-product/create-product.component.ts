import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Product } from "../product.model";
import { ProductService } from "../product.service";

@Component({
  selector: "app-create-product",
  templateUrl: "./create-product.component.html",
  styleUrls: ["./create-product.component.css"],
})
export class CreateProductComponent implements OnInit {
  product: Product = {
    name: "iPhone XR",
    price: 2999.99,
  };

  constructor(private router: Router, private productService: ProductService) {}

  ngOnInit(): void {}

  createProduct(): void {
    this.productService.create(this.product).subscribe(() => {
      this.productService.showSuccesMessage("Produto criado com sucesso");
      this.navigateToProducts();
    });
  }

  navigateToProducts(): void {
    this.router.navigate(["/products"]);
  }
}
