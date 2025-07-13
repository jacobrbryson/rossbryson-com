import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VivacityTechComponent } from './vivacity-tech.component';

describe('VivacityTechComponent', () => {
  let component: VivacityTechComponent;
  let fixture: ComponentFixture<VivacityTechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VivacityTechComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VivacityTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
