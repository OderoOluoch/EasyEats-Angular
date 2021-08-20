import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public products : any = [];
  public grandTotal :number = 0;
  public orders:any;

  constructor(
    private cartService:CartService,
    private apiService:ApiService
    ) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
    })

    this.apiService.apiCallOrderTypes().subscribe((response: any) => {
      console.log(response + "Response")
      this.orders = response;
    });


  }

  removeItem(item:any){
    this.cartService.removeCartItem(item);
  }

  

  emptyCart(){
    this.cartService.removeAllCart();
  }

}
