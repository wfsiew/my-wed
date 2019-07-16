import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppConstant } from '../constants/index';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {

  ID_LIST = [];
  currentImage = '';
  currentIndex = 0;

  readonly AppConstant = AppConstant;

  constructor(
    private route: ActivatedRoute, 
    private router: Router) { }

  ngOnInit() {
    for (let i = 0; i < AppConstant.IMG_LIST.length; i++) {
      this.ID_LIST.push(i);
    }

    let i = this.route.snapshot.params.id;
    let id = parseInt(i);
    this.currentIndex = id;
    let image = AppConstant.IMG_LIST[id];
    this.setCurrentImage(image);
  }

  setCurrentImage(image) {
    this.currentImage = `assets/src-photo/MC3_${image}.jpg`;
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
