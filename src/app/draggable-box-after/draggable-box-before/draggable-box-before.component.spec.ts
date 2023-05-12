import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DraggableBoxBeforeComponent } from './draggable-box-before.component';

describe('DraggableBoxBeforeComponent', () => {
  let component: DraggableBoxBeforeComponent;
  let fixture: ComponentFixture<DraggableBoxBeforeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DraggableBoxBeforeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DraggableBoxBeforeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
