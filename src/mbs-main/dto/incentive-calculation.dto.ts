import { ApiProperty, ApiTags } from "@nestjs/swagger";
import { IsBoolean, IsDateString, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";
import { Decimal } from "@prisma/client/runtime";

import { GovernativeProcurementLotDto } from "./governative-procurement-lot.dto";
import { IncentiveRegulationDto } from "./incentive-regulation.dto";

export class IncentiveCalculationDto {
	
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
	confirmed?: boolean;

    @ApiProperty({
		type: Number,
		required: false
	})
	@IsOptional()
	@IsNumber()
	preAmount?: number;

    @ApiProperty({
		type: Number,
		required: false
	})
	@IsOptional()
	@IsNumber()
	amount?: number;


	@IsNumber()
	governativeProcurementLotId?: number;
	governativeProcurementLot?: GovernativeProcurementLotDto;

	@IsNumber()
	regulationId?: number;
	regulation?: IncentiveRegulationDto;

}