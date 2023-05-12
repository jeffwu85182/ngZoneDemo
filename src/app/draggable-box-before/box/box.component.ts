import { Component, Input } from '@angular/core';
import { Box } from 'src/app/box';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[box]',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss'],
})
export class BoxComponent {
  @Input() box: Box = { id: 0, x: 0, y: 0 };
  @Input() selected: boolean = false;
}
