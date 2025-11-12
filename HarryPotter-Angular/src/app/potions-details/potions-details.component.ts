import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PotionsService } from '../potions.service';
import { Potions } from '../types';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-potions-details',
  imports: [],
  templateUrl: './potions-details.component.html',
  styleUrl: './potions-details.component.css'
})
export class PotionsDetailsComponent {

  selectedPotion: Potions | undefined;
  route: ActivatedRoute = inject(ActivatedRoute);
  constructor(private potionService: PotionsService) {}

  async ngOnInit() {
    let potion = await firstValueFrom(this.potionService.getPotion(this.route.snapshot.params['name']));
    this.selectedPotion = potion;
    
  }


}
