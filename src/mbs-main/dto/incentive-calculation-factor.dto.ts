import { ApiProperty, ApiTags } from "@nestjs/swagger";
import { IsBoolean, IsDateString, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";


import { IncentiveCalculationMethodDto } from "./incentive-calculation-method.dto";

export class IncentiveCalculationFactorDto {
	
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
	minval?: number;

    @ApiProperty({
		type: Number,
		required: false
	})
	@IsOptional()
	@IsNumber()
	maxval?: number;

    @ApiProperty({
		type: Number,
		required: false
	})
	@IsOptional()
	@IsNumber()
	defaultval?: number;


	@IsNumber()
	incentiveCalculationMethodId?: number;
	incentiveCalculationMethod?: IncentiveCalculationMethodDto;

}