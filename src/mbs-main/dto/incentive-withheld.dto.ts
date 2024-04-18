import { ApiProperty, ApiTags } from "@nestjs/swagger";
import { IsBoolean, IsDateString, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";


import { ProcurementTypeDto } from "./procurement-type.dto";
import { IncentiveRegulationDto } from "./incentive-regulation.dto";

export class IncentiveWithheldDto {
	
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
		type: Boolean,
		required: false
	})
	@IsOptional()
	@IsBoolean()
	active?: boolean;

    @ApiProperty({
		type: Number,
		required: false
	})
	@IsOptional()
	@IsNumber()
	amount?: number;

    @ApiProperty({
		type: Number,
		required: false
	})
	@IsOptional()
	@IsNumber()
	percentage?: number;


	@IsNumber()
	procurementTypeId?: number;
	procurementType?: ProcurementTypeDto;

	@IsNumber()
	regulationId?: number;
	regulation?: IncentiveRegulationDto;

}