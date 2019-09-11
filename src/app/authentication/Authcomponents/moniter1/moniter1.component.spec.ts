import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Moniter1Component } from './moniter1.component';

describe('Moniter1Component', () => {
  let component: Moniter1Component;
  let fixture: ComponentFixture<Moniter1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Moniter1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Moniter1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
