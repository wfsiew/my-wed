import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppConstant } from '../constants/index';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  readonly AppConstant = AppConstant;

  constructor(private router: Router) { 
  }

  ngOnInit() {
  }

  getImage(image: number) {
    return `assets/dest-photo/MC3_${image}.jpg`;
  }

  show(id) {
    this.router.navigate(['/photo', id]);
  }
}
