import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HousesComponent } from './houses/houses.component';
import { HousesDetailsComponent } from './houses-details/houses-details.component';
import { PotionsComponent } from './potions/potions.component';
import { PotionsDetailsComponent } from './potions-details/potions-details.component';
import { ListOfPotionsComponent } from './list-of-potions/list-of-potions.component';
import { CreatePotionComponent } from './create-potion/create-potion.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'houses', component: HousesComponent },
    { path: 'houses/:name', component: HousesDetailsComponent },
    { path: 'potions', component: PotionsComponent },
    { path: 'potions/list', component: ListOfPotionsComponent},
    { path: 'potions/list/:name', component: PotionsDetailsComponent },
    { path: 'potions/create', component: CreatePotionComponent},
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: '' }
];
