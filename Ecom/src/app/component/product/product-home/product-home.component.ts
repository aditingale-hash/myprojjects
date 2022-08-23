import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { Product } from '../model/product.model';
import { ProductserviceService } from '../service/productservice.service';

@Component({
  selector: 'app-product-home',
  templateUrl: './product-home.component.html',
  styleUrls: ['./product-home.component.css']
})
export class ProductHomeComponent implements OnInit {

  categoryId: number;
  products: Product[];
  errorMsg:string;
  cid: number;

  constructor(private actRoute: ActivatedRoute, private productService: ProductserviceService,
    private appService: AppService) { }

  ngOnInit(): void {
    this.actRoute.params.subscribe(
      params=>{
        this.cid = params.cid;
        this.productService.getProductByCatId(params.cid)
        .subscribe(data=>{
            this.products = data;
        },
        error=>{
          this.errorMsg='Error in Loading Products, Please contact Administrator';
        });
      }
    );
  }

  addToCart(product: Product){
      //Reach out to cart_product[] and push this object in that array.

      //Step 1: extract the array out of subject
      let productArray = this.appService.cart_product.value;
      //Step 2:push the product into the extracted array
      productArray.push(product);
      //Step 3: Update the subject with new value of extracted array
      this.appService.cart_product.next(productArray);
  }


}
