import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextclockComponent } from './textclock.component';

describe('TextclockComponent', () => {
  let component: TextclockComponent;
  let fixture: ComponentFixture<TextclockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextclockComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TextclockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
