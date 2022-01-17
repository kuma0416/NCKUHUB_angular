import { Injectable } from '@angular/core';
import { course } from './course';
import { courses } from './mock-courses';

@Injectable({
  providedIn: 'root'
})
export class CorsesService {

  constructor() { }

  getCourses(): course[] {
    return courses;
  }

}
