import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthConntentComponent } from './auth-conntent.component';

describe('AuthConntentComponent', () => {
  let component: AuthConntentComponent;
  let fixture: ComponentFixture<AuthConntentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthConntentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthConntentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
