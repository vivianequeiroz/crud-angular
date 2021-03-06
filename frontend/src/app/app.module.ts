import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { MatCardModule } from "@angular/material/card";
import { MatListModule } from "@angular/material/list";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatFormFieldModule } from "@angular/material/form-field";

import { NavComponent } from "./components/template/nav/nav.component";
import { HeaderComponent } from "./components/template/header/header.component";
import { FooterComponent } from "./components/template/footer/footer.component";

import { HomeComponent } from "./views/home/home.component";
import { ProductsComponent } from "./views/products/products.component";
import { CreateProductComponent } from "./components/product/create-product/create-product.component";

import { RedColorDirective } from "./directives/red-color.directive";
import { ListProductsComponent } from './components/product/list-products/list-products.component';
import { ProductsTableComponent } from './components/product/products-table/products-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    ProductsComponent,
    RedColorDirective,
    CreateProductComponent,
    ListProductsComponent,
    ProductsTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
