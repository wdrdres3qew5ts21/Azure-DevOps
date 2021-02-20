import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  public products: Product[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Product[]>(baseUrl + 'api/Data/Products').subscribe(result => {
      this.products = result;
    }, error => console.error(error));
  }
}

interface Product {
  id: number;
  title: string;
  description: string;
  quantity: number;
}

