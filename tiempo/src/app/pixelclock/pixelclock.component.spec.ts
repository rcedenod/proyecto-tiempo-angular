import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PixelclockComponent } from './pixelclock.component';

describe('PixelclockComponent', () => {
  let component: PixelclockComponent;
  let fixture: ComponentFixture<PixelclockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PixelclockComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PixelclockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
