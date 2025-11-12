import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfPotionsComponent } from './list-of-potions.component';

describe('ListOfPotionsComponent', () => {
  let component: ListOfPotionsComponent;
  let fixture: ComponentFixture<ListOfPotionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListOfPotionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListOfPotionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
