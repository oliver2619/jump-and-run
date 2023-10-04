import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArenaCompletionComponent } from './arena-completion.component';

describe('ArenaCompletionComponent', () => {
  let component: ArenaCompletionComponent;
  let fixture: ComponentFixture<ArenaCompletionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArenaCompletionComponent]
    });
    fixture = TestBed.createComponent(ArenaCompletionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
