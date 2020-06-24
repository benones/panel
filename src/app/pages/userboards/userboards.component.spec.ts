import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserboardsComponent } from './userboards.component';

describe('UserboardsComponent', () => {
  let component: UserboardsComponent;
  let fixture: ComponentFixture<UserboardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserboardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserboardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
