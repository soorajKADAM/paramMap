import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaurusComponent } from './taurus.component';

describe('TaurusComponent', () => {
  let component: TaurusComponent;
  let fixture: ComponentFixture<TaurusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaurusComponent]
    });
    fixture = TestBed.createComponent(TaurusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
