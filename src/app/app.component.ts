import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  drawCircles = new Array();
  tail = {
    prev: -1,
    current: -1
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

    if (prev !== -1) {
      this.drawCircles[prev].tail = false;
    }


    if (current !== id && current !== -1) {
      this.drawCircles[current].tail = true;
      this.drawCircles[current].active = false;

    }
    this.drawCircles[id].active = true;
    this.tail.prev = this.tail.current;
    this.tail.current = id;


  }

}
