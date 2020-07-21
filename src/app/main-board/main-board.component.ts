import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-board',
  templateUrl: './main-board.component.html',
  styleUrls: ['./main-board.component.scss']
})
export class MainBoardComponent implements OnInit {

  constructor() { }

  drawCircles = new Array();
  tail = {
    prev: null,
    current: null
  };

  ngOnInit() {
    this.generateCircles();
  }

  generateCircles() {
    this.drawCircles = Array.from(Array(16), (_, index) => ({
      id: index,
      tail: false,
      active: false
    }));
  }

  drawCircle(id) {
    const { prev, current } = this.tail;

    if (prev !== null) this.drawCircles[prev].tail = false;


    if (current !== id && current !== null) {
      this.drawCircles[current].tail = true;
      this.drawCircles[current].active = false;

    }
    this.drawCircles[id].active = true;
    this.tail.prev = this.tail.current;
    this.tail.current = id;


  }

}
