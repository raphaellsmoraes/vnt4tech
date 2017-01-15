import { Component, OnInit, OnDestroy} from '@angular/core';

import { Subscription } from 'rxjs/subscription';
import { SwitchService } from '../shared/switch.service';
import { Paho } from 'ng2-mqtt';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss']
})
export class SwitchComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  private state: boolean;
  private _client: Paho.MQTT.Client;

  constructor(private switchService: SwitchService) {
    this.subscription = switchService.stateChanged$.subscribe(
      state => {
        this.state = state;
      }
    );

    this._client = new Paho.MQTT.Client('37.187.106.16', 8081, 'Vnt4tech-WebApp');

    this._client.onConnectionLost = (responseObject: Object) => {
      console.log('Connection lost.');
    };

    this._client.onMessageArrived = (message: Paho.MQTT.Message) => {
      console.log(message.payloadString);
    };

    this._client.connect({ onSuccess: this.onConnected.bind(this), useSSL: true});
   }

  private onConnected(): void {
    console.log('Connected to broker.');
    this._client.subscribe('vnt4tech/web', {});
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
    let message: Paho.MQTT.Message;
    (this.state) ? message = new Paho.MQTT.Message("{'seta_led':'desligado'}") : message = new Paho.MQTT.Message("{'seta_led':'ligado'}");
    message.destinationName = 'vnt4tech/web';
    this._client.send(message);
    this.switchService.changeSwitch(!this.state);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
