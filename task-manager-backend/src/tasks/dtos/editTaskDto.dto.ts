import { IsBoolean, IsNotEmpty, IsString } from "class-validator";

export class EditTaskDto {

    timestamp: string | null;

    completionStatus: string;
    
    @IsNotEmpty()
    @IsString()
    name: string;
    
    @IsNotEmpty()
    @IsString()
    description: string;
    
    @IsNotEmpty()
    @IsString()
    id: string;
    
    @IsNotEmpty()
    @IsBoolean()
    pendingDeletion: boolean;
}