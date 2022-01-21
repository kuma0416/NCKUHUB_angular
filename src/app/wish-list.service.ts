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

  removeWishList(course: course): void{
    for(let index in wishList){
      if(wishList[index] == course){
        let deleteIndex: number = +index;
        wishList.splice(deleteIndex, 1);
        break;
      }
    }
    return;
  }

  checkWishList(course: course): boolean{
    if(wishList.includes(course)){
      return true;
    } else {
      return false;
    }
  }
}
