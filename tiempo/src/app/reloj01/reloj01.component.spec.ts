import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reloj01Component } from './reloj01.component';

describe('Reloj01Component', () => {
  let component: Reloj01Component;
  let fixture: ComponentFixture<Reloj01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Reloj01Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Reloj01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
