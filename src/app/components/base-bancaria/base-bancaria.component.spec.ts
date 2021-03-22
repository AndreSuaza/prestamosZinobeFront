import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseBancariaComponent } from './base-bancaria.component';

describe('BaseBancariaComponent', () => {
  let component: BaseBancariaComponent;
  let fixture: ComponentFixture<BaseBancariaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseBancariaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseBancariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
