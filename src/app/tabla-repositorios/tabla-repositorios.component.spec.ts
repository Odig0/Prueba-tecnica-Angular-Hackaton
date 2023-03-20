import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaRepositoriosComponent } from './tabla-repositorios.component';

describe('TablaRepositoriosComponent', () => {
  let component: TablaRepositoriosComponent;
  let fixture: ComponentFixture<TablaRepositoriosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaRepositoriosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaRepositoriosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
