import { Component, inject, OnInit } from '@angular/core';
import { Houses } from '../types';
import { HousesService } from '../houses.service';
import { firstValueFrom } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-houses-details',
  imports: [],
  templateUrl: './houses-details.component.html',
  styleUrl: './houses-details.component.css'
})
export class HousesDetailsComponent implements OnInit {
  selectedHouse: Houses | undefined;
  route: ActivatedRoute = inject(ActivatedRoute);
  constructor(private houseService: HousesService) {}

  async ngOnInit() {
    let house = await firstValueFrom(this.houseService.getHouse(this.route.snapshot.params['name']));
    this.selectedHouse = house;
    
  }


}
