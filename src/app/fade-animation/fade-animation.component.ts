import { Component } from '@angular/core';
import { trigger, state, style, animate, transition, stagger, query } from '@angular/animations';

@Component({
  selector: 'app-fade-animation',
  templateUrl: './fade-animation.component.html',
  styleUrls: ['./fade-animation.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('in',
        style({ opacity: 1 })
      ),
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms')
      ]),
      transition(':leave',
        animate('300ms', style({ opacity: 0 })
      ))
    ])
  ]
})
export class FadeAnimationComponent {


}
