import { PartialType } from "@nestjs/mapped-types";
import { createEventDTO } from "./create-events.dto";

export class updateEventsDTO extends PartialType(createEventDTO){

}