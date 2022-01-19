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

  checkWish(variable: any): boolean{
    if(typeof variable.wish === 'undefined' || variable.wish == false){
      return false;
    }
    return true;
  }

  wishListEvent(id: number, mode: number): void{
    if(mode == 1){
      this.wishListService.setWishList(this.coursesService.getSpecificCourse(id));
    }
    console.log(this.wishListService.getWishList);
    return;
  }

}
