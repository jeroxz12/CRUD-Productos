import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoformComponent } from './productoform.component';

describe('ProductoformComponent', () => {
  let component: ProductoformComponent;
  let fixture: ComponentFixture<ProductoformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductoformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductoformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
