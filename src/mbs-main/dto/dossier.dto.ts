import { ApiProperty, ApiTags } from "@nestjs/swagger";
import { IsBoolean, IsDateString, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";


import { DossierTypeDto } from "./dossier-type.dto";
import { ElaborateGroupDto } from "./elaborate-group.dto";
import { AssetDto } from "./asset.dto";
import { RelifDto } from "./relif.dto";
import { OperationDto } from "./operation.dto";

export class DossierDto {
	
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


	@IsNumber()
	typeId?: number;
	type?: DossierTypeDto;

	@IsNumber()
	elaborateGroupId?: number;
	elaborateGroup?: ElaborateGroupDto;

	@IsNumber()
	assetId?: number;
	asset?: AssetDto;

	@IsNumber()
	relifId?: number;
	relif?: RelifDto;

	@IsNumber()
	operationId?: number;
	operation?: OperationDto;

}