import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisAulasComponent } from './mis-aulas.component';

describe('MisAulasComponent', () => {
  let component: MisAulasComponent;
  let fixture: ComponentFixture<MisAulasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MisAulasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MisAulasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
