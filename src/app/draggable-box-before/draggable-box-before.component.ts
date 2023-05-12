import { Component, OnInit } from '@angular/core';
import { Box } from '../box';

@Component({
  selector: 'app-draggable-box-before',
  templateUrl: './draggable-box-before.component.html',
  styleUrls: ['./draggable-box-before.component.scss'],
})
export class DraggableBoxBeforeComponent implements OnInit {
  currentId: number | null = null;
  boxes: Box[] = [];
  offsetX: number = 0;
  offsetY: number = 0;
  constructor() {}

  ngOnInit() {
    function getRandomInt(min: number, max: number) {
      return Math.floor(Math.random() * (max - min)) + min;
    }
    for (let i = 0; i < 10000; i++) {
      const id = i;
      const x = getRandomInt(0, 500);
      const y = getRandomInt(0, 500);
      const box = { id, x, y };
      this.boxes.push(box);
    }
  }
  mouseDown(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const id = Number(target.getAttribute('dataId'));
    if (!id) return;
    const box = this.boxes[id];
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    this.offsetX = box.x - mouseX;
    this.offsetY = box.y - mouseY;
    this.currentId = id;
  }

  mouseMove(event: MouseEvent) {
    event.preventDefault();
    if (this.currentId !== null) {
      this.updateBox(
        this.currentId,
        event.clientX + this.offsetX,
        event.clientY + this.offsetY
      );
    }
  }

  mouseUp($event: MouseEvent) {
    this.currentId = null;
  }

  updateBox(id: number, x: number, y: number) {
    const box = this.boxes[id];
    box.x = x;
    box.y = y;
  }
}
