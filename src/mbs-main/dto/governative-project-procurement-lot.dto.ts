import { ApiProperty, ApiTags } from "@nestjs/swagger";
import { IsBoolean, IsDateString, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";


import { GovernativeProjectDto } from "./governative-project.dto";
import { GovernativeProcurementLotDto } from "./governative-procurement-lot.dto";

export class GovernativeProjectProcurementLotDto {
	
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
	amount?: number;


	@IsNumber()
	projectId?: number;
	project?: GovernativeProjectDto;

	@IsNumber()
	procurementLotId?: number;
	procurementLot?: GovernativeProcurementLotDto;

}