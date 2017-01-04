/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LampComponent } from './lamp.component';

describe('LampComponent', () => {
  let component: LampComponent;
  let fixture: ComponentFixture<LampComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LampComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
