import { Injectable } from '@angular/core';
import { Potions } from './types';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PotionsService {

  constructor( private httpClient: HttpClient) { }

  getPotions(): Observable<Potions[]> {
    let potions = this.httpClient.get<Potions[]>('http://localhost:3000/api/potions');
    return potions;
  }
  getPotion(name: string): Observable<Potions> {
    let potion = this.httpClient.get<Potions>(`http://localhost:3000/api/potions/${name}`);
    return potion;
  }
  createPotion(potion: Potions): Observable<Potions> {
    let newPotion = this.httpClient.post<Potions>('http://localhost:3000/api/potions', potion);
    return newPotion;
  }
}
