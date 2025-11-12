import { Controller, Get, NotFoundException, Param} from '@nestjs/common';
import { Houses } from './houses.interface';
import { MongoClient, Db, ObjectId, Collection } from 'mongodb';


@Controller('houses')
export class HousesController {

    database: Db;
    collection: Collection<Houses>;

    constructor() {
        let mongoClient = new MongoClient('mongodb://localhost:27017');
        this.database = mongoClient.db('HarryPotterDB');
        this.collection = this.database.collection<Houses>('Houses');
    }

    @Get()
    public async findAll(){
        let houses = await this.collection.find().toArray();
        return houses;
    }
    @Get(':name')
    public async findOne(@Param('name') name: string){
        
        let house = await this.collection.findOne({name: name});
        if(!house){
            throw new NotFoundException(`House ${name} not found`);
        }
        return house;
    }

}
