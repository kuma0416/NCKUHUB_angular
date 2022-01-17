import { Component, OnInit } from '@angular/core';
import { WishlistComponent } from '../wishlist/wishlist.component';
import { CourseListComponent } from '../course-list/course-list.component'

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
