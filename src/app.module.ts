import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Event } from './events/event.entity';
import { EventController } from './events/events.controller';
import { EventsModule } from './events/events.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from './ormConfig';

@Module({
  imports: [TypeOrmModule.forRoot(config),
EventsModule],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
