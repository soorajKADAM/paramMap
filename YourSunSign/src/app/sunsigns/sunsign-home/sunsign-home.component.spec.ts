import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SunsignHomeComponent } from './sunsign-home.component';

describe('SunsignHomeComponent', () => {
  let component: SunsignHomeComponent;
  let fixture: ComponentFixture<SunsignHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SunsignHomeComponent]
    });
    fixture = TestBed.createComponent(SunsignHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
