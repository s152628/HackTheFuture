import { Component } from '@angular/core';
import { Potions } from '../types';
import { RouterLink } from '@angular/router';
import { PotionsService } from '../potions.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-potions',
  imports: [RouterLink],
  templateUrl: './potions.component.html',
  styleUrl: './potions.component.css'
})
export class PotionsComponent {

  potions: Potions[] = [];

  constructor( public potionService: PotionsService ) {}

  async ngOnInit() {
    this.potions = await firstValueFrom(this.potionService.getPotions());
  }

}
