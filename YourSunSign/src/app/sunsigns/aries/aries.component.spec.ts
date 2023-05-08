import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AriesComponent } from './aries.component';

describe('AriesComponent', () => {
  let component: AriesComponent;
  let fixture: ComponentFixture<AriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AriesComponent]
    });
    fixture = TestBed.createComponent(AriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
