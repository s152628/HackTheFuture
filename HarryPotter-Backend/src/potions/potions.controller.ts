import { Controller, Get, HttpCode, Param, Post, Body, Delete} from '@nestjs/common';
import { Potions } from './potions.interface';

@Controller('potions')
export class PotionsController {
    @Get()
    public async getAllPotions(){
        let potions = [
            {
                name: "Polyjuice Potion",
                ingredients: [
                    "Lacewing flies",
                    "Leeches",
                    "Powdered Bicorn horn",
                    "Knotgrass",
                    "Fluxweed"]
            },
            {
                name: "Felix Felicis",
                ingredients: [
                    "Ashwinder egg",
                    "Squill bulb",
                    "Murtlap tentacle",
                    "Tincture of thyme",
                    "Occamy eggshell"]
            }
        ]
        return potions;
    }

}
