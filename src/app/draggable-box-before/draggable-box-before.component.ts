import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-draggable-box-before',
  templateUrl: './draggable-box-before.component.html',
  styleUrls: ['./draggable-box-before.component.scss']
})
export class DraggableBoxBeforeComponent implements OnInit {
  currentId = null;
  boxes = [];
  offsetX;
  offsetY;
  constructor() {}

  ngOnInit() {
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }
    for (let i = 0; i < 10000; i++) {
      const id = i;
      const x = getRandomInt(0, 500);
      const y = getRandomInt(0, 500);
      const box = {id, x, y};
      this.boxes.push(box);
    }
  }
  mouseDown(event) {
    const id = Number(event.target.getAttribute('dataId'));
    const box = this.boxes[id];
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    this.offsetX = box.x - mouseX;
    this.offsetY = box.y - mouseY;
    this.currentId = id;
  }

  mouseMove(event) {
    event.preventDefault();
    if (this.currentId !== null) {
      this.updateBox(
          this.currentId, event.clientX + this.offsetX,
          event.clientY + this.offsetY);
    }
  }

  mouseUp($event) {
    this.currentId = null;
  }

  updateBox(id, x, y) {
    const box = this.boxes[id];
    box.x = x;
    box.y = y;
  }
}
