import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-color-animation-demo',
  templateUrl: './color-animation-demo.component.html',
  styleUrls: ['./color-animation-demo.component.css'],
  animations: [
    trigger('rainbowColorChange', [
      transition(':enter', [
        style({ backgroundColor: 'red'}),
        animate('3s', style({ backgroundColor: 'purple' })
        )]),
        transition(':leave', [
          animate('3s', style({ backgroundColor: 'red'}))
        ])
      // state('0', style ({
      //   backgroundColor: 'red'
      // })),
      // state('20', style ({
      //   backgroundColor: 'orange'
      // })),
      // state('40', style ({
      //   backgroundColor: 'yellow'
      // })),
      // state('60', style ({
      //   backgroundColor: 'green'
      // })),
      // state('80', style ({
      //   backgroundColor: 'blue'
      // })),
      // state('100', style ({
      //   backgroundColor: 'purple'
      // }))
    ]),
  ]
})
export class ColorAnimationDemoComponent {

  constructor() { }

}
