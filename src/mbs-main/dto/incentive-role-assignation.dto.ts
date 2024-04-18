import { ApiProperty, ApiTags } from "@nestjs/swagger";
import { IsBoolean, IsDateString, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";
import { Decimal } from "@prisma/client/runtime";

import { IncentiveBeneficiaryDto } from "./incentive-beneficiary.dto";
import { IncentiveCalculationDto } from "./incentive-calculation.dto";
import { IncentiveRoleDto } from "./incentive-role.dto";

export class IncentiveRoleAssignationDto {
	
	@ApiProperty({
		type: Number,
		required: false
	})
	@IsNumber()
	@IsOptional()
	id?: number;



	@IsNumber()
	beneficiaryId?: number;
	beneficiary?: IncentiveBeneficiaryDto;

	@IsNumber()
	calculationId?: number;
	calculation?: IncentiveCalculationDto;

	@IsNumber()
	roleId?: number;
	role?: IncentiveRoleDto;

}