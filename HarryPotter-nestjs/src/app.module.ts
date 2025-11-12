import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HousesController } from './houses/houses.controller';
import { PotionsController } from './potions/potions.controller';

@Module({
  imports: [],
  controllers: [AppController, HousesController, PotionsController],
  providers: [AppService],
})
export class AppModule {}
