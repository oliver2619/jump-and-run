import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountUpValueComponent } from './count-up-value.component';

describe('CountUpValueComponent', () => {
  let component: CountUpValueComponent;
  let fixture: ComponentFixture<CountUpValueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CountUpValueComponent]
    });
    fixture = TestBed.createComponent(CountUpValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
