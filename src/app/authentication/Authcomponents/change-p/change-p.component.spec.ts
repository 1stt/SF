import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePComponent } from './change-p.component';

describe('ChangePComponent', () => {
  let component: ChangePComponent;
  let fixture: ComponentFixture<ChangePComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangePComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangePComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
