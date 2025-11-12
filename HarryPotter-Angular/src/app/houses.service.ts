import { Injectable } from '@angular/core';
import { Houses } from './types';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HousesService {

  

  constructor( private httpClient: HttpClient ) { }

    getHouses(): Observable<Houses[]> {
    let houses =  this.httpClient.get<Houses[]>('https://web17.htf25.qubr.be/api/houses');
    return houses;
  }
    getHouse(name: string): Observable<Houses> {
    let house = this.httpClient.get<Houses>(`https://web17.htf25.qubr.be/api/houses/${name}`);
    return house;
    }
}
