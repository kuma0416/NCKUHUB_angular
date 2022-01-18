import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';
import { course } from '../course';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  courses: course[] = [];
  // coursesService: any;

  constructor( private coursesService: CoursesService){}

  ngOnInit(): void {
    this.getCourses();
  }

  getCourses(): void{
    this.courses = this.coursesService.getCourses();
  }

}
