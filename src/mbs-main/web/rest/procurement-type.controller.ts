import { BadRequestException, Body, Controller, Delete, Get, NotFoundException, Param, Post, Put, Query } from "@nestjs/common";
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import { ProcurementTypeBusinessService } from "../../business/procurement-type.business.service";
import { ProcurementTypeDto } from "../../dto/procurement-type.dto";

@ApiTags('procurementType')
@Controller('mbs/main')
export class ProcurementTypeController {
    constructor(
        private procurementTypeBusinessService: ProcurementTypeBusinessService,

    ) {}

    @Post('procurementTypes')
    @ApiResponse({ status: 201, description: 'The record has been successfully created.'})
    @ApiResponse({ status: 400, description: 'Bad request.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    createProcurementType(@Body() procurementTypeDto: ProcurementTypeDto) {
        if(procurementTypeDto.id !== undefined) {
            throw new BadRequestException("not insert id in creation");
        }
        return this.procurementTypeBusinessService.createProcurementType(procurementTypeDto);
    }

    @Put('procurementTypes')
    @ApiResponse({ status: 201, description: 'The record has been successfully updated.'})
    @ApiResponse({ status: 400, description: 'Bad request.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    updateProcurementType(@Body() procurementTypeDto: ProcurementTypeDto) {
        if(procurementTypeDto.id === undefined) {
            throw new BadRequestException("id is required in update");
        }
        return this.procurementTypeBusinessService.editProcurementType(procurementTypeDto);
    }

    @Get('procurementTypes')
    @ApiResponse({ status: 200, description: 'List of procurementTypes.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    getAllProcurementTypes(@Query() queryParams): Promise<any> {
        let filters: any = queryParams;
        return this.procurementTypeBusinessService.searchProcurementTypes(filters);
    }

    @Get('procurementTypes/count')
    @ApiResponse({ status: 200, description: 'Count of procurementTypes.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    getProcurementTypesCount(@Query() queryParams): Promise<number> {
        let filters: any = queryParams;
        return this.procurementTypeBusinessService.countProcurementTypes(filters);
    }

    @Get('procurementTypes/:id')
    @ApiResponse({ status: 200, description: 'ProcurementType detail.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    async getProcurementType(@Param('id') id: number): Promise<ProcurementTypeDto> {
        let procurementTypeDto: ProcurementTypeDto = await this.procurementTypeBusinessService.getProcurementType(+id);
        if(procurementTypeDto === null) throw new NotFoundException();
        return procurementTypeDto;
    }

    @Delete('procurementTypes/:id/delete')
    @ApiResponse({ status: 200, description: 'ProcurementType deleted.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    deleteProcurementType(@Param('id') id: number) {
        return this.procurementTypeBusinessService.deleteProcurementType(+id);
    }

}