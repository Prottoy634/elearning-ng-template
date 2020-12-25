import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router } from '@angular/router';
import Swiper from 'swiper';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'elearning';
  mySwiper: Swiper;
  isHome = true;
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {

  }
  ngOnInit(): void {
    this.mySwiper = new Swiper('.swiper-container', {
      slidesPerView: 0,
      spaceBetween: 0,
      autoplay: {
        delay: 5000,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
    console.log(this.activatedRoute.pathFromRoot, window.location.href);
    this.activatedRoute.paramMap.subscribe(url => {
      console.log(url, this.router.url);
    });
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }

}
