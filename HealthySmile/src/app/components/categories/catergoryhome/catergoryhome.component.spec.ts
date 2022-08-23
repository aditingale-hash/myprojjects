import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatergoryhomeComponent } from './catergoryhome.component';

describe('CatergoryhomeComponent', () => {
  let component: CatergoryhomeComponent;
  let fixture: ComponentFixture<CatergoryhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatergoryhomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatergoryhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
