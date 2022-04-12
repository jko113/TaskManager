import { IsBoolean, IsNotEmpty, IsString } from "class-validator";

export class CreateTaskDto {

    timestamp: string | null;

    completionStatus: string;
    
    @IsNotEmpty()
    @IsString()
    name: string;
    
    @IsNotEmpty()
    @IsString()
    description: string;
    
    @IsNotEmpty()
    @IsBoolean()
    pendingDeletion: boolean;
}