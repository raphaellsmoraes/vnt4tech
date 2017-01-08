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

  constructor(switchService: SwitchService) {
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

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
