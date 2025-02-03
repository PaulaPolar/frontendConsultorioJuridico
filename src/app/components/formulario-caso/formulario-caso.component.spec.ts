import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioCasoComponent } from './formulario-caso.component';

describe('FormularioCasoComponent', () => {
  let component: FormularioCasoComponent;
  let fixture: ComponentFixture<FormularioCasoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioCasoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioCasoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
