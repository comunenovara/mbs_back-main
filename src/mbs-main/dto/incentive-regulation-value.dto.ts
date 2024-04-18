import { ApiProperty, ApiTags } from "@nestjs/swagger";
import { IsBoolean, IsDateString, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";


import { IncentiveStageDto } from "./incentive-stage.dto";
import { IncentiveRoleDto } from "./incentive-role.dto";

export class IncentiveRegulationValueDto {
	
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
	stageId?: number;
	stage?: IncentiveStageDto;

	@IsNumber()
	roleId?: number;
	role?: IncentiveRoleDto;

}