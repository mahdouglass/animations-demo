import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoverAnimationDemoComponent } from './hover-animation-demo.component';

describe('HoverAnimationDemoComponent', () => {
  let component: HoverAnimationDemoComponent;
  let fixture: ComponentFixture<HoverAnimationDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoverAnimationDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoverAnimationDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
