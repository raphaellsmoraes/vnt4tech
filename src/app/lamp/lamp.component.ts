import { Component, OnInit, OnDestroy} from '@angular/core';

import { Subscription } from 'rxjs/subscription';

import { SwitchService } from '../shared/switch.service';

@Component({
  selector: 'app-lamp',
  templateUrl: './lamp.component.html',
  styleUrls: ['./lamp.component.scss']
})
export class LampComponent implements OnInit, OnDestroy {
  private state: boolean;
  private subscription: Subscription;
  private messageSubscription: Subscription;
  private switchService: SwitchService;
  private aspect: boolean = true;

  constructor(switchService: SwitchService) {
    this.switchService = switchService;

    this.subscription = switchService.stateChanged$.subscribe(
      state => {
        this.state = state;
      }
    );

    this.messageSubscription = switchService.messageChanged$.subscribe(
      message => {
        if (message.led === 'ligado') {
          this.switchService.changeSwitch(true);
          if (message.temperatura >= 30) {
            this.aspect = true;
          } else {
            this.aspect = false;
          }
          this.setClasses();
        }
      }
    );
   }

   ngOnInit() {
     this.setClasses();
   }

   setClasses() {
     return{
       off: !this.state,
       on: this.state
     };
   }

   setColorAspect() {
     return {
       cold: !this.aspect,
       hot: this.aspect
     };
   }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
