import { ApiProperty, ApiTags } from "@nestjs/swagger";
import { IsBoolean, IsDateString, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";


import { ProcurementTypeDto } from "./procurement-type.dto";
import { IncentiveRegulationDto } from "./incentive-regulation.dto";

export class IncentiveCalculationMethodDto {
	
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
	code?: string;


	@IsNumber()
	procurementTypeId?: number;
	procurementType?: ProcurementTypeDto;

	@IsNumber()
	regulationId?: number;
	regulation?: IncentiveRegulationDto;

}