import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DicasViagensComponent } from './dicas-viagens.component';

describe('DicasViagensComponent', () => {
  let component: DicasViagensComponent;
  let fixture: ComponentFixture<DicasViagensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DicasViagensComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DicasViagensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
