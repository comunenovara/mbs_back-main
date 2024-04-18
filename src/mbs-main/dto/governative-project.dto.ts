import { ApiProperty, ApiTags } from "@nestjs/swagger";
import { IsBoolean, IsDateString, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";



export class GovernativeProjectDto {
	
	@ApiProperty({
		type: Number,
		required: false
	})
	@IsNumber()
	@IsOptional()
	id?: number;


    @ApiProperty({
		type: String,
		required: false
	})
	@IsOptional()
	@IsString()
	code?: string;

    @ApiProperty({
		type: String,
		required: false
	})
	@IsOptional()
	@IsString()
	description?: string;

    @ApiProperty({
		type: Number,
		required: false
	})
	@IsOptional()
	@IsNumber()
	amount?: number;


}