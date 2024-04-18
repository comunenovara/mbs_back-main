import { ApiProperty, ApiTags } from "@nestjs/swagger";
import { IsBoolean, IsDateString, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";


import { AssetDto } from "./asset.dto";

export class RelifDto {
	
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
		type: Date,
		required: false
	})
	@IsOptional()
	@IsDateString()
	startDate?: Date;

    @ApiProperty({
		type: Date,
		required: false
	})
	@IsOptional()
	@IsDateString()
	endDate?: Date;


	@IsNumber()
	assetId?: number;
	asset?: AssetDto;

}