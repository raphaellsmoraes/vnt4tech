import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class SwitchService {
    // Observable string sources
    private switchModified: BehaviorSubject<boolean> = new BehaviorSubject(false);
    private messageModified: BehaviorSubject<any> = new BehaviorSubject({"led":"desligado", "temperatura": 0});

    // Observable string streams
    stateChanged$ = this.switchModified.asObservable();
    messageChanged$ = this.messageModified.asObservable();

    // Service message commands
    changeSwitch(state: boolean) {
        return this.switchModified.next(state);
    }

    changeMessage(message: any) {
        return this.messageModified.next(message);
    }
}