import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PotionsDetailsComponent } from './potions-details.component';

describe('PotionsDetailsComponent', () => {
  let component: PotionsDetailsComponent;
  let fixture: ComponentFixture<PotionsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PotionsDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PotionsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
