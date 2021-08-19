import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
 cuisines:any;
 menus:any;
 shops:any;

  constructor(
    private apiservice:ApiService,
    private cartService:CartService
    ) { }

  ngOnInit(): void {
    this.apiservice.apiCallCusines().subscribe((response: any) => {
      this.cuisines = response;
    });


    this.apiservice.apiCallMenus().subscribe((response: any) => {
      this.menus = response;
    });


    this.apiservice.apiCallShops().subscribe((response: any) => {
      this.shops = response;
    });
  }

  addtoCart(item:any){
    this.cartService.addToCart(item);

  }

}
