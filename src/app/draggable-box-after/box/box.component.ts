import { Component, OnInit, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[box]',
  templateUrl: './box.component.html'
})
export class BoxComponent {
  @Input() box;
  @Input() selected;

}
