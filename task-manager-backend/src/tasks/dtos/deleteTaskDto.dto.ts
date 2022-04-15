import { IsNotEmpty, IsString } from "class-validator";

export class DeleteTaskDto {

    @IsNotEmpty()
    @IsString()
    hexId: string;
}