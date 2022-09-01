import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  relativepathSRC= '../assets/furniture.jpg';
  widthSRC="2000"
  heightSRC="500"
  constructor() { }

  ngOnInit(): void {
  }

}
