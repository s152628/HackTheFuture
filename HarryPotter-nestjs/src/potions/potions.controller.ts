import { Controller, Get, HttpCode, Param, Post, Body, Delete} from '@nestjs/common';
import { MongoClient, Db, Collection, ObjectId } from 'mongodb';
import { Potions } from './potions.interface';

@Controller('potions')
export class PotionsController {
    database: Db;
    collection: Collection<Potions>;

    constructor() {
        let mongoClient = new MongoClient('mongodb://localhost:27017');
        this.database = mongoClient.db('HarryPotterDB');
        this.collection = this.database.collection<Potions>('Potions');
    }

    @Get()
    public async getAllPotions(){
        let potions = await this.collection.find().toArray();
        return potions;
    }
    @Get(':name')
    public async getOnePotion(@Param('name') name: string){
        let potion = await this.collection.findOne({name: name});
        return potion;
    }
    @Post()
    @HttpCode(201)
    public async createPotion(@Body() potion: Potions){
        let result = await this.collection.insertOne(potion);
        return result;
    }
    @Delete(':name')
    @HttpCode(204)
    public async deletePotion(@Param('name') name: string){
        let result = await this.collection.deleteOne({name: name});
        return result;
    }


}
