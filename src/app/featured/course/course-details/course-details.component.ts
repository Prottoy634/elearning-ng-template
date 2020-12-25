import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent implements OnInit {
  relatedCourseSwiper: Swiper;
  constructor() { }

  ngOnInit(): void {
    this.initRelatedCourseSwiper();
  }

  private initRelatedCourseSwiper(): void {
    this.relatedCourseSwiper = new Swiper('.course-swiper-container', {
      slidesPerView: 3,
      spaceBetween: 40,
      loop: true,
    });
  }
}
