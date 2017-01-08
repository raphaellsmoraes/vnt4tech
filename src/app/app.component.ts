import { Component } from '@angular/core';

import { Subscription } from 'rxjs/subscription';

import { SwitchService } from './shared/switch.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [SwitchService]
})
export class AppComponent {
  private subscription: Subscription;

  constructor(private switchService: SwitchService) {
    this.subscription = switchService.stateChanged$.subscribe(
      state => {
        console.log(state);
      }
    );
   }
}
