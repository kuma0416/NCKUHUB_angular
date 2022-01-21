import { Injectable } from '@angular/core';
import { course } from './course';
import { courses } from './mock-courses';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private courseList: course[] = [];

  constructor() { }

  getCourses(): course[] {
    this.courseList = courses;
    return courses;
  }

  getSpecificCourse(id: number): course | any {
    for(let i:number = 0; i<this.courseList.length; ++i){
      if(this.courseList[i].id == id){
        return this.courseList[i];
      }
    }
    return null;
  }
}
