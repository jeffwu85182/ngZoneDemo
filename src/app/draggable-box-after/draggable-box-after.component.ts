import { Component, NgZone, OnInit } from '@angular/core';
import { Box } from '../box';

@Component({
  selector: 'app-draggable-box-after',
  templateUrl: './draggable-box-after.component.html',
})
export class DraggableBoxAfterComponent implements OnInit {
  currentId: number | null = null;
  boxes: Box[] = [];
  offsetX: number = 0;
  offsetY: number = 0;
  element: HTMLElement | null = null;
  constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    const getRandomInt = (min: number, max: number) => {
      return Math.floor(Math.random() * (max - min)) + min;
    };
    for (let i = 0; i < 10000; i++) {
      const id = i;
      const x = getRandomInt(0, 500);
      const y = getRandomInt(0, 500);
      const box: Box = { id, x, y };
      this.boxes.push(box);
    }
  }

  bindMouse = (ev: MouseEvent) => {
    this.mouseMove(ev);
  };

  mouseDown(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const id = Number(target.getAttribute('dataId'));
    const box = this.boxes[id];
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    this.offsetX = box.x - mouseX;
    this.offsetY = box.y - mouseY;
    this.currentId = id;

    this.element = event.target as HTMLElement;
    this._ngZone.runOutsideAngular(() => {
      window.document.addEventListener('mousemove', this.bindMouse);
    });
  }

  mouseMove(event: MouseEvent) {
    event.preventDefault();
    this.element?.setAttribute('x', event.clientX + this.offsetX + 'px');
    this.element?.setAttribute('y', event.clientY + this.offsetY + 'px');
    // Another options is to change styles using transformations
    // this.element.style = `transform: translate3d(${event.clientX -
    // this.off.mouseX}px,
    // ${event.clientY - this.off.mouseY}px, 0)`;
  }

  mouseUp($event: MouseEvent) {
    this._ngZone.run(() => {
      if (this.currentId) {
        this.updateBox(
          this.currentId,
          $event.clientX + this.offsetX,
          $event.clientY + this.offsetY
        );
      }
      this.currentId = null;
    });
    window.document.removeEventListener('mousemove', this.bindMouse);
  }

  updateBox(id: number, x: number, y: number) {
    const box = this.boxes[id];
    box.x = x;
    box.y = y;
  }
}
