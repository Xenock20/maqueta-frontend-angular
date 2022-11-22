import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaveditComponent } from './navedit.component';

describe('NaveditComponent', () => {
  let component: NaveditComponent;
  let fixture: ComponentFixture<NaveditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NaveditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NaveditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
