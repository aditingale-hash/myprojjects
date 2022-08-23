import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeclizationhomeComponent } from './speclizationhome.component';

describe('SpeclizationhomeComponent', () => {
  let component: SpeclizationhomeComponent;
  let fixture: ComponentFixture<SpeclizationhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpeclizationhomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeclizationhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
