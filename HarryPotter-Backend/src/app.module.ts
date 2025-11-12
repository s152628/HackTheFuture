import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PotionsController } from './potions/potions.controller';

@Module({
  imports: [],
  controllers: [AppController, PotionsController],
  providers: [AppService],
})
export class AppModule {}
