import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArenaSetupComponent } from './arena-setup.component';

describe('ArenaSetupComponent', () => {
  let component: ArenaSetupComponent;
  let fixture: ComponentFixture<ArenaSetupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArenaSetupComponent]
    });
    fixture = TestBed.createComponent(ArenaSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
