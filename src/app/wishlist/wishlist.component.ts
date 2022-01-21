import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { WishListService } from '../wish-list.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  @Input()
  wishListLength: number = this.wishListService.getWishList.length;

  constructor(private wishListService: WishListService) { }

  ngOnInit(): void {
  }

  checkWishListEmpty(): boolean{
    if(this.wishListService.getWishList.length>0){
      return false;
    } else {
      return true;
    }
  }

}
