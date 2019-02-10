import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-change-size-animation',
  templateUrl: './change-size-animation.component.html',
  styleUrls: ['./change-size-animation.component.css'],
  animations: [
    trigger('changeDivSize', [
      state('initial', style ({
        backgroundColor: 'green',
        width: '100px',
        height: '100px'
      })),
      state('final', style({
        backgroundColor: 'green',
        width: '200px',
        height: '200px'
      })),
      transition('initial=>final', animate('1500ms')),
      transition('final=>initial', animate('1000ms'))
    ]),
  ],
})
export class ChangeSizeAnimationComponent {
  currentState = 'initial';
  divClicked = false;

  changeState() {
    this.currentState = this.currentState === 'initial' ? 'final' : 'initial';
  }

  changeSize() {
    this.divClicked = !this.divClicked;
  }
}
