import { Component, OnInit, OnDestroy} from '@angular/core';

import { Subscription } from 'rxjs/subscription';
import { SwitchService } from '../shared/switch.service';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss']
})
export class SwitchComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  private state: boolean;

  constructor(private switchService: SwitchService) {
    this.subscription = switchService.stateChanged$.subscribe(
      state => {
        this.state = state;
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

  changeState() {
    this.switchService.changeSwitch(!this.state);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
