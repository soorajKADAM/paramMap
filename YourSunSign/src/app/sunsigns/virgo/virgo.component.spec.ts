import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirgoComponent } from './virgo.component';

describe('VirgoComponent', () => {
  let component: VirgoComponent;
  let fixture: ComponentFixture<VirgoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VirgoComponent]
    });
    fixture = TestBed.createComponent(VirgoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
