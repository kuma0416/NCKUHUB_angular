import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';
import { course } from '../course';
import { WishListService } from '../wish-list.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  courses: course[] = [];
  // coursesService: any;

  constructor( private coursesService: CoursesService, private wishListService: WishListService){}

  ngOnInit(): void {
    this.getCourses();
  }

  getCourses(): void{
    this.courses = this.coursesService.getCourses();
  }

  checkWish(course: course): boolean{
    return this.wishListService.checkWishList(course);
  }

  wishListEvent(course: course): void{
    if(this.checkWish(course)){
      this.wishListService.removeWishList(course);
    } else {
      this.wishListService.setWishList(course);
    }
    console.log(this.wishListService.getWishList());
    return ;
  }

}
