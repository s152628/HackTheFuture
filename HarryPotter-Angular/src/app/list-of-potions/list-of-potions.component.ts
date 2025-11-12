import { Component } from '@angular/core';
import { Potions } from '../types';
import { RouterLink } from '@angular/router';
import { PotionsService } from '../potions.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-list-of-potions',
  imports: [RouterLink],
  templateUrl: './list-of-potions.component.html',
  styleUrl: './list-of-potions.component.css'
})
export class ListOfPotionsComponent {
 potions: Potions[] = [];

  constructor( public potionService: PotionsService ) {}

  async ngOnInit() {
    this.potions = await firstValueFrom(this.potionService.getPotions());
  }
}
