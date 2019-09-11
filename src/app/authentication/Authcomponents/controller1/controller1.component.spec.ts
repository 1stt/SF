import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Controller1Component } from './controller1.component';

describe('Controller1Component', () => {
  let component: Controller1Component;
  let fixture: ComponentFixture<Controller1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Controller1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Controller1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
