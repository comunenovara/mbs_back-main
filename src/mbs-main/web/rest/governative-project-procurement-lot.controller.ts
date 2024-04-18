import { BadRequestException, Body, Controller, Delete, Get, NotFoundException, Param, Post, Put, Query } from "@nestjs/common";
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import { GovernativeProjectProcurementLotBusinessService } from "../../business/governative-project-procurement-lot.business.service";
import { GovernativeProjectProcurementLotDto } from "../../dto/governative-project-procurement-lot.dto";

@ApiTags('governativeProjectProcurementLot')
@Controller('mbs/main')
export class GovernativeProjectProcurementLotController {
    constructor(
        private governativeProjectProcurementLotBusinessService: GovernativeProjectProcurementLotBusinessService,

    ) {}

    @Post('governativeProjectProcurementLots')
    @ApiResponse({ status: 201, description: 'The record has been successfully created.'})
    @ApiResponse({ status: 400, description: 'Bad request.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    createGovernativeProjectProcurementLot(@Body() governativeProjectProcurementLotDto: GovernativeProjectProcurementLotDto) {
        if(governativeProjectProcurementLotDto.id !== undefined) {
            throw new BadRequestException("not insert id in creation");
        }
        return this.governativeProjectProcurementLotBusinessService.createGovernativeProjectProcurementLot(governativeProjectProcurementLotDto);
    }

    @Put('governativeProjectProcurementLots')
    @ApiResponse({ status: 201, description: 'The record has been successfully updated.'})
    @ApiResponse({ status: 400, description: 'Bad request.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    updateGovernativeProjectProcurementLot(@Body() governativeProjectProcurementLotDto: GovernativeProjectProcurementLotDto) {
        if(governativeProjectProcurementLotDto.id === undefined) {
            throw new BadRequestException("id is required in update");
        }
        return this.governativeProjectProcurementLotBusinessService.editGovernativeProjectProcurementLot(governativeProjectProcurementLotDto);
    }

    @Get('governativeProjectProcurementLots')
    @ApiResponse({ status: 200, description: 'List of governativeProjectProcurementLots.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    getAllGovernativeProjectProcurementLots(@Query() queryParams): Promise<any> {
        let filters: any = queryParams;
        return this.governativeProjectProcurementLotBusinessService.searchGovernativeProjectProcurementLots(filters);
    }

    @Get('governativeProjectProcurementLots/count')
    @ApiResponse({ status: 200, description: 'Count of governativeProjectProcurementLots.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    getGovernativeProjectProcurementLotsCount(@Query() queryParams): Promise<number> {
        let filters: any = queryParams;
        return this.governativeProjectProcurementLotBusinessService.countGovernativeProjectProcurementLots(filters);
    }

    @Get('governativeProjectProcurementLots/:id')
    @ApiResponse({ status: 200, description: 'GovernativeProjectProcurementLot detail.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    async getGovernativeProjectProcurementLot(@Param('id') id: number): Promise<GovernativeProjectProcurementLotDto> {
        let governativeProjectProcurementLotDto: GovernativeProjectProcurementLotDto = await this.governativeProjectProcurementLotBusinessService.getGovernativeProjectProcurementLot(+id);
        if(governativeProjectProcurementLotDto === null) throw new NotFoundException();
        return governativeProjectProcurementLotDto;
    }

    @Delete('governativeProjectProcurementLots/:id/delete')
    @ApiResponse({ status: 200, description: 'GovernativeProjectProcurementLot deleted.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    deleteGovernativeProjectProcurementLot(@Param('id') id: number) {
        return this.governativeProjectProcurementLotBusinessService.deleteGovernativeProjectProcurementLot(+id);
    }

}