import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CumulativeclockComponent } from './cumulativeclock.component';

describe('CumulativeclockComponent', () => {
  let component: CumulativeclockComponent;
  let fixture: ComponentFixture<CumulativeclockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CumulativeclockComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CumulativeclockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
