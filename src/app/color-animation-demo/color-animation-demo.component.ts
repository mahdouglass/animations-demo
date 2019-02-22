import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition, stagger, query } from '@angular/animations';

@Component({
  selector: 'app-color-animation-demo',
  templateUrl: './color-animation-demo.component.html',
  styleUrls: ['./color-animation-demo.component.css'],
  animations: [
    trigger('rainbowColorChange', [
      // transition(':enter', [
      //   style({ backgroundColor: 'red'}),
      //   animate('3s', style({ backgroundColor: 'purple' })
      //   )]),
      state('0', style ({
        backgroundColor: 'red'
      })),
      state('20', style ({
        backgroundColor: 'orange'
      })),
      state('40', style ({
        backgroundColor: 'yellow'
      })),
      state('60', style ({
        backgroundColor: 'green'
      })),
      state('80', style ({
        backgroundColor: 'blue'
      })),
      state('100', style ({
        backgroundColor: 'purple'
      })),
      transition('0=>20', animate('300ms')),
      transition('20=>40', animate('300ms')),
      // transition(':enter', [
      //   query('*', [
      //     style({ backgroundColor: 'red'}),
      //     stagger(100, [
      //       style({ backgroundColor: 'orange'}),
      //       animate('200ms')
      //     ]),
      //     stagger(100, [
      //       style({ backgroundColor: 'purple'}),
      //       animate('200ms')
      //     ])
      //   ])
      // ])
    ]),
  ]
})
export class ColorAnimationDemoComponent {
  currentState = '0';

  changeState() {
    this.currentState = this.currentState === '0' ? '20' : '0';
  }

}
