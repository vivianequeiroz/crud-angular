import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ProductService } from "../product.service";

@Component({
  selector: "app-create-product",
  templateUrl: "./create-product.component.html",
  styleUrls: ["./create-product.component.css"],
})
export class CreateProductComponent implements OnInit {
  constructor(private router: Router, private productService: ProductService) {}

  ngOnInit(): void {}

  createProduct(): void {
    this.productService.showSuccesMessage("Produto criado com sucesso");
  }

  cancelProductCreation(): void {
    this.router.navigate(["/products"]);
  }
}
