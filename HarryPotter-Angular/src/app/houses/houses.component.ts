import { Component } from '@angular/core';
import { RouterLink} from '@angular/router';
import { Houses } from '../types';
import { HousesService } from '../houses.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-houses',
  imports: [RouterLink],
  templateUrl: './houses.component.html',
  styleUrl: './houses.component.css'
})
export class HousesComponent {

  houses: Houses[] = [];

  constructor( public houseService: HousesService ) {}

  async ngOnInit() {
    this.houses = await firstValueFrom(this.houseService.getHouses());
  }

  

}
