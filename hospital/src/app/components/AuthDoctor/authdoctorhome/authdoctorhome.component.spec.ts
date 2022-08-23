import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthdoctorhomeComponent } from './authdoctorhome.component';

describe('AuthdoctorhomeComponent', () => {
  let component: AuthdoctorhomeComponent;
  let fixture: ComponentFixture<AuthdoctorhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthdoctorhomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthdoctorhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
