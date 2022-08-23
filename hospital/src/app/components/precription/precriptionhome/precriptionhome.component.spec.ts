import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrecriptionhomeComponent } from './precriptionhome.component';

describe('PrecriptionhomeComponent', () => {
  let component: PrecriptionhomeComponent;
  let fixture: ComponentFixture<PrecriptionhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrecriptionhomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrecriptionhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
