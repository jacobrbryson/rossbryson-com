import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrcwoodGamesComponent } from './orcwood-games.component';

describe('OrcwoodGamesComponent', () => {
  let component: OrcwoodGamesComponent;
  let fixture: ComponentFixture<OrcwoodGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrcwoodGamesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrcwoodGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
