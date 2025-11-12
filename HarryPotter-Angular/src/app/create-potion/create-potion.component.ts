import { Component } from '@angular/core';
import { Potions, inventors, ingredients } from '../types';
import { FormsModule } from '@angular/forms';
import { PotionsService } from '../potions.service';
import { firstValueFrom} from 'rxjs';

@Component({
  selector: 'app-create-potion',
  imports: [FormsModule],
  templateUrl: './create-potion.component.html',
  styleUrl: './create-potion.component.css'
})
export class CreatePotionComponent {
  potions: Potions[] = [];
  newPotion: Potions | undefined;
  potionName: string = '';
  potionEffect: string = '';
  potionSideEffects: string = '';
  potionCharacteristics: string = '';
  potionTime: string = '';
  potionDifficulty: string = '';
  ingredientName: string= '';
  InventorFirstName: string = '';
  InventorLastName: string = '';
  potionIngredients: ingredients[] = [];
  potionInventors: inventors[] = [];
  potionManufacturer: string = '';

  constructor(private potionService: PotionsService) {
    
  }

 
async ngOnInit() {
  
    this.potions = await firstValueFrom(this.potionService.getPotions());

}
async addPotion() {
  const existingPotion = this.potions.find(potion => potion.name === this.potionName);
  if (existingPotion) {
    alert(`Potion with name: ${this.potionName} already exists`);
    return;
  }
  
  
  const ingredients = this.ingredientName.split(',').map(name => ({ name }));
  const inventor = {
    firstName: this.InventorFirstName,
    lastName: this.InventorLastName,
  }
  const newPotion = 
  { 
    name: this.potionName, 
    effect: this.potionEffect,
    sideEffects: this.potionSideEffects,
    characteristics: this.potionCharacteristics,
    time: this.potionTime,
    difficulty: this.potionDifficulty,
    ingredients,
    inventors: [inventor],
    manufacturer: this.potionManufacturer,
  }
  try {
    const addedPotion = await firstValueFrom(this.potionService.createPotion(newPotion));
    this.potions = [addedPotion, ...this.potions];
    this.potionName = '';
    this.potionEffect = '';
    this.potionSideEffects = '';
    this.potionCharacteristics = '';
    this.potionTime = '';
    this.potionDifficulty = '';
    this.ingredientName = '';
    this.InventorFirstName = '';
    this.InventorLastName = '';
    this.potionIngredients = [];
    this.potionInventors = [];
    this.potionManufacturer = '';
    
  

  } catch (error) {
    console.error("Error adding potion: ", error);
    alert("Error adding potion");
  }
}
}

