import { IsNotEmpty, IsString } from "class-validator";

export class GetSingleTaskDto {

    @IsNotEmpty()
    @IsString()
    hexId: string;
}