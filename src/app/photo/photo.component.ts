import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppConstant } from '../constants/index';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css'],
  providers: [NgbCarouselConfig]
})
export class PhotoComponent implements OnInit {

  activeId = '2301';
  showNavigationArrows = true;
  showNavigationIndicators = false;

  readonly AppConstant = AppConstant;

  constructor(
    private route: ActivatedRoute, 
    config: NgbCarouselConfig) {
    config.showNavigationArrows = true;
    }

  ngOnInit() {
    let i = this.route.snapshot.params.id;
    this.activeId = `${i}`;
  }

  getImage(image: number) {
    return `assets/resized-photo/MC3_${image}.jpg`;
  }
}
