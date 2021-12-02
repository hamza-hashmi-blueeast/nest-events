import { Event } from './event.entity';
import { EventController } from './events.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports:[
        TypeOrmModule.forFeature([Event]),
    ],
    controllers:[EventController]
})

export class EventsModule {}
