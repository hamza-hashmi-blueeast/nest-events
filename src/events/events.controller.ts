import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { createEventDTO } from "./create-events.dto";
import { Event } from "./event.entity";

@Controller('/events')
export class EventController{
    constructor(
        @InjectRepository(Event)
        private readonly repository:Repository<Event>
    ){
    }

@Get()
    async findAll(){
        return this.repository.find();
    }

@Get(':id')
    async findOne(@Param('id') id){
        return await this.repository.findOne(id)
    }

@Post()
    async create(@Body() input:createEventDTO){
        await this.repository.save({
            ...input
        })
        return input
    }

@Patch(':id')
    async update(@Param('id') id, @Body() input){
        const event = await this.repository.findOne(id)
        await this.repository.save({
            ...input,
            ...event
        })

        return input;
    }

@Delete(':id') 
    async remove(@Param('id') id){
        const event = await this.repository.findOne(id)
        await this.repository.remove(event);
    }

}