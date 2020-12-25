import { AfterViewInit, Component, OnInit } from '@angular/core';
import Swiper from 'swiper';
import * as jquery from 'jquery';
import { Observable, of } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  title = 'elearning';
  homeSwiper: Swiper;
  courseSwiper: Swiper;
  testimonialSwiper: Swiper;
  instructorSwiper: Swiper;
  courseList$: Observable<any> = of([0, 1, 2, 3, 4, 0, 1, 2, 3, 4]);
  constructor() { }

  ngOnInit(): void {
    this.initAllSwipers();
  }

  private initAllSwipers(): void {
    this.initHomeSwiper();
    this.initCourseSwiper();
    this.initTestimonialSwiper();
    this.initInstructorSwiper();
  }
  ngAfterViewInit(): void {
    this.courseSwiper.update();
  }
  private initHomeSwiper(): void {
    this.homeSwiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 0,
      autoplay: {
        delay: 50,
      },
    });
  }
  private initCourseSwiper(): void {
    this.courseSwiper = new Swiper('.course-swiper-container', {
      slidesPerView: 3,
      spaceBetween: 40,
      loop: true,
    });
  }
  private initInstructorSwiper(): void {

    this.instructorSwiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 0,
      autoplay: {
        delay: 50,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

  }
  private initTestimonialSwiper(): void {

    this.testimonialSwiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 0,
      autoplay: {
        delay: 50,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }
}

