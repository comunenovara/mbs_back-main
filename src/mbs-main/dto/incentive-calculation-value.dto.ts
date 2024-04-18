import { ApiProperty, ApiTags } from "@nestjs/swagger";
import { IsBoolean, IsDateString, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";
import { Decimal } from "@prisma/client/runtime";

import { IncentiveCalculationDto } from "./incentive-calculation.dto";
import { IncentiveRegulationValueDto } from "./incentive-regulation-value.dto";

export class IncentiveCalculationValueDto {
	
	@ApiProperty({
		type: Number,
		required: false
	})
	@IsNumber()
	@IsOptional()
	id?: number;


    @ApiProperty({
		type: Number,
		required: false
	})
	@IsOptional()
	@IsNumber()
	value?: number;


	@IsNumber()
	calculationId?: number;
	calculation?: IncentiveCalculationDto;

	@IsNumber()
	regulationValueId?: number;
	regulationValue?: IncentiveRegulationValueDto;

}