import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeSizeAnimationComponent } from './change-size-animation.component';

describe('ChangeSizeAnimationComponent', () => {
  let component: ChangeSizeAnimationComponent;
  let fixture: ComponentFixture<ChangeSizeAnimationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeSizeAnimationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeSizeAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
