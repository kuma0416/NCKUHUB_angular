import { Injectable } from '@angular/core';
import { course } from './course';
import { wishList } from './mock-wishList';


@Injectable({
  providedIn: 'root'
})
export class WishListService {

  constructor() { }

  getWishList(): course[] {
    return wishList;
  }

  setWishList(course: course): void{
    wishList.push(course);
    return ;
  }
}
