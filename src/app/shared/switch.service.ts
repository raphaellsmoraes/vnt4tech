import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class SwitchService {
    // Observable string sources
    private switchModified: BehaviorSubject<boolean> = new BehaviorSubject(false);

    // Observable string streams
    stateChanged$ = this.switchModified.asObservable();

    // Service message commands
    changeSwitch(state: boolean) {
        return this.switchModified.next(state);
    }
}