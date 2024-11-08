import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BinaryclockComponent } from './binaryclock.component';

describe('BinaryclockComponent', () => {
  let component: BinaryclockComponent;
  let fixture: ComponentFixture<BinaryclockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BinaryclockComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BinaryclockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
