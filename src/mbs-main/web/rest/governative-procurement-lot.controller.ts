import { BadRequestException, Body, Controller, Delete, Get, NotFoundException, Param, Post, Put, Query } from "@nestjs/common";
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import { GovernativeProcurementLotBusinessService } from "../../business/governative-procurement-lot.business.service";
import { GovernativeProcurementLotDto } from "../../dto/governative-procurement-lot.dto";

@ApiTags('governativeProcurementLot')
@Controller('mbs/main')
export class GovernativeProcurementLotController {
    constructor(
        private governativeProcurementLotBusinessService: GovernativeProcurementLotBusinessService,

    ) {}

    @Post('governativeProcurementLots')
    @ApiResponse({ status: 201, description: 'The record has been successfully created.'})
    @ApiResponse({ status: 400, description: 'Bad request.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    createGovernativeProcurementLot(@Body() governativeProcurementLotDto: GovernativeProcurementLotDto) {
        if(governativeProcurementLotDto.id !== undefined) {
            throw new BadRequestException("not insert id in creation");
        }
        return this.governativeProcurementLotBusinessService.createGovernativeProcurementLot(governativeProcurementLotDto);
    }

    @Put('governativeProcurementLots')
    @ApiResponse({ status: 201, description: 'The record has been successfully updated.'})
    @ApiResponse({ status: 400, description: 'Bad request.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    updateGovernativeProcurementLot(@Body() governativeProcurementLotDto: GovernativeProcurementLotDto) {
        if(governativeProcurementLotDto.id === undefined) {
            throw new BadRequestException("id is required in update");
        }
        return this.governativeProcurementLotBusinessService.editGovernativeProcurementLot(governativeProcurementLotDto);
    }

    @Get('governativeProcurementLots')
    @ApiResponse({ status: 200, description: 'List of governativeProcurementLots.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    getAllGovernativeProcurementLots(@Query() queryParams): Promise<any> {
        let filters: any = queryParams;
        return this.governativeProcurementLotBusinessService.searchGovernativeProcurementLots(filters);
    }

    @Get('governativeProcurementLots/count')
    @ApiResponse({ status: 200, description: 'Count of governativeProcurementLots.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    getGovernativeProcurementLotsCount(@Query() queryParams): Promise<number> {
        let filters: any = queryParams;
        return this.governativeProcurementLotBusinessService.countGovernativeProcurementLots(filters);
    }

    @Get('governativeProcurementLots/:id')
    @ApiResponse({ status: 200, description: 'GovernativeProcurementLot detail.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    async getGovernativeProcurementLot(@Param('id') id: number): Promise<GovernativeProcurementLotDto> {
        let governativeProcurementLotDto: GovernativeProcurementLotDto = await this.governativeProcurementLotBusinessService.getGovernativeProcurementLot(+id);
        if(governativeProcurementLotDto === null) throw new NotFoundException();
        return governativeProcurementLotDto;
    }

    @Delete('governativeProcurementLots/:id/delete')
    @ApiResponse({ status: 200, description: 'GovernativeProcurementLot deleted.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    deleteGovernativeProcurementLot(@Param('id') id: number) {
        return this.governativeProcurementLotBusinessService.deleteGovernativeProcurementLot(+id);
    }

}