import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CirculargraphComponent } from './circulargraph.component';

describe('CirculargraphComponent', () => {
  let component: CirculargraphComponent;
  let fixture: ComponentFixture<CirculargraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CirculargraphComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CirculargraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
