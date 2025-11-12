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
    let houses =  this.httpClient.get<Houses[]>('http://localhost:3000/api/houses');
    return houses;
  }
    getHouse(name: string): Observable<Houses> {
    let house = this.httpClient.get<Houses>(`http://localhost:3000/api/houses/${name}`);
    return house;
    }
}
