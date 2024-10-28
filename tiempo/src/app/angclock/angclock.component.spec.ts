import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngclockComponent } from './angclock.component';

describe('AngclockComponent', () => {
  let component: AngclockComponent;
  let fixture: ComponentFixture<AngclockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngclockComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AngclockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
