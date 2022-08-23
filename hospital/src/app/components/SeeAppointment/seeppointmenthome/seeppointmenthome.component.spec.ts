import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeppointmenthomeComponent } from './seeppointmenthome.component';

describe('SeeppointmenthomeComponent', () => {
  let component: SeeppointmenthomeComponent;
  let fixture: ComponentFixture<SeeppointmenthomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeeppointmenthomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeeppointmenthomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
