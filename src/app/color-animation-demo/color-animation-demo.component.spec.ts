import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorAnimationDemoComponent } from './color-animation-demo.component';

describe('ColorAnimationDemoComponent', () => {
  let component: ColorAnimationDemoComponent;
  let fixture: ComponentFixture<ColorAnimationDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorAnimationDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorAnimationDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
