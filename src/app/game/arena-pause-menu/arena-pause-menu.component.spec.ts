import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArenaPauseMenuComponent } from './arena-pause-menu.component';

describe('ArenaPauseMenuComponent', () => {
  let component: ArenaPauseMenuComponent;
  let fixture: ComponentFixture<ArenaPauseMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArenaPauseMenuComponent]
    });
    fixture = TestBed.createComponent(ArenaPauseMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
