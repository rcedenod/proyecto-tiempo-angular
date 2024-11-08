import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatrixclockComponent } from './matrixclock.component';

describe('MatrixclockComponent', () => {
  let component: MatrixclockComponent;
  let fixture: ComponentFixture<MatrixclockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatrixclockComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MatrixclockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
