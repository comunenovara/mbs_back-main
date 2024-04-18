import { ApiProperty, ApiTags } from "@nestjs/swagger";
import { IsBoolean, IsDateString, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";



export class AssetDto {
	
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
	description?: string;

    @ApiProperty({
		type: String,
		required: false
	})
	@IsOptional()
	@IsString()
	address?: string;

    @ApiProperty({
		type: Number,
		required: false
	})
	@IsOptional()
	@IsNumber()
	mq?: number;


}