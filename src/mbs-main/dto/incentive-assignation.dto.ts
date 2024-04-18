import { ApiProperty, ApiTags } from "@nestjs/swagger";
import { IsBoolean, IsDateString, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";
import { Decimal } from "@prisma/client/runtime";

import { IncentiveRoleAssignationDto } from "./incentive-role-assignation.dto";
import { IncentiveCalculationValueDto } from "./incentive-calculation-value.dto";

export class IncentiveAssignationDto {
	
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
	assignationId?: number;
	assignation?: IncentiveRoleAssignationDto;

	@IsNumber()
	calculationValueId?: number;
	calculationValue?: IncentiveCalculationValueDto;

}