import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrbitclockComponent } from './orbitclock.component';

describe('OrbitclockComponent', () => {
  let component: OrbitclockComponent;
  let fixture: ComponentFixture<OrbitclockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrbitclockComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrbitclockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
