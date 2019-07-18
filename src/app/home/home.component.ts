import { Component, OnInit } from '@angular/core';
import { AppConstant } from '../constants/index';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  readonly AppConstant = AppConstant;

  constructor() { 
  }

  ngOnInit() {
  }

  getImage(image: number) {
    return `assets/dest-photo/MC3_${image}.jpg`;
  }
}
