import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-hover-animation-demo',
  templateUrl: './hover-animation-demo.component.html',
  styleUrls: ['./hover-animation-demo.component.css'],
  animations: [
    trigger('hoverColor', [
      state('initial', style ({
        backgroundColor: 'red',
      })),
      state('final', style({
        backgroundColor: 'green',
      })),
      transition('initial=>final', animate('1500ms')),
      transition('final=>initial', animate('1000ms'))
    ]),
  ]
})
export class HoverAnimationDemoComponent {
  
}
