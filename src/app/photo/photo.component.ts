import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppConstant } from '../constants/index';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css'],
  providers: [NgbCarouselConfig]
})
export class PhotoComponent implements OnInit {

  currentImage = '';
  currentIndex = 0;
  activeId = '2301';
  showNavigationArrows = true;
  showNavigationIndicators = false;

  readonly AppConstant = AppConstant;

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    config: NgbCarouselConfig) {
    config.showNavigationArrows = true;
    }

  ngOnInit() {
    let i = this.route.snapshot.params.id;
    this.activeId = `${i}`;

    // let id = parseInt(i);
    // this.currentIndex = id;
    // let image = AppConstant.IMG_LIST[id];
    // this.setCurrentImage(image);
  }

  getImage(image: number) {
    return `assets/resized-photo/MC3_${image}.jpg`;
  }

  setCurrentImage(image) {
    this.currentImage = `assets/resized-photo/MC3_${image}.jpg`;
  }

  onSwipeLeft(e) {
    this.prev();
  }

  onSwipeRight(e) {
    this.next();
  }

  back() {
    this.router.navigate(['/']);
  }

  next() {
    let n = AppConstant.IMG_LIST.length - 1;
    if (this.currentIndex < n) {
      this.currentImage = '';
      this.currentIndex += 1;
      let image = AppConstant.IMG_LIST[this.currentIndex];
      this.setCurrentImage(image);
      this.router.navigate(['/photo', this.currentIndex]);
    }
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentImage = '';
      this.currentIndex -= 1;
      let image = AppConstant.IMG_LIST[this.currentIndex];
      this.setCurrentImage(image);
      this.router.navigate(['/photo', this.currentIndex]);
    }
  }
}
