import { BadRequestException, Body, Controller, Delete, Get, NotFoundException, Param, Post, Put, Query } from "@nestjs/common";
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import { IncentiveRegulationBusinessService } from "../../business/incentive-regulation.business.service";
import { IncentiveRegulationDto } from "../../dto/incentive-regulation.dto";

@ApiTags('incentiveRegulation')
@Controller('mbs/main')
export class IncentiveRegulationController {
    constructor(
        private incentiveRegulationBusinessService: IncentiveRegulationBusinessService,

    ) {}

    @Post('incentiveRegulations')
    @ApiResponse({ status: 201, description: 'The record has been successfully created.'})
    @ApiResponse({ status: 400, description: 'Bad request.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    createIncentiveRegulation(@Body() incentiveRegulationDto: IncentiveRegulationDto) {
        if(incentiveRegulationDto.id !== undefined) {
            throw new BadRequestException("not insert id in creation");
        }
        return this.incentiveRegulationBusinessService.createIncentiveRegulation(incentiveRegulationDto);
    }

    @Put('incentiveRegulations')
    @ApiResponse({ status: 201, description: 'The record has been successfully updated.'})
    @ApiResponse({ status: 400, description: 'Bad request.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    updateIncentiveRegulation(@Body() incentiveRegulationDto: IncentiveRegulationDto) {
        if(incentiveRegulationDto.id === undefined) {
            throw new BadRequestException("id is required in update");
        }
        return this.incentiveRegulationBusinessService.editIncentiveRegulation(incentiveRegulationDto);
    }

    @Get('incentiveRegulations')
    @ApiResponse({ status: 200, description: 'List of incentiveRegulations.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    getAllIncentiveRegulations(@Query() queryParams): Promise<any> {
        let filters: any = queryParams;
        return this.incentiveRegulationBusinessService.searchIncentiveRegulations(filters);
    }

    @Get('incentiveRegulations/count')
    @ApiResponse({ status: 200, description: 'Count of incentiveRegulations.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    getIncentiveRegulationsCount(@Query() queryParams): Promise<number> {
        let filters: any = queryParams;
        return this.incentiveRegulationBusinessService.countIncentiveRegulations(filters);
    }

    @Get('incentiveRegulations/:id')
    @ApiResponse({ status: 200, description: 'IncentiveRegulation detail.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    async getIncentiveRegulation(@Param('id') id: number): Promise<IncentiveRegulationDto> {
        let incentiveRegulationDto: IncentiveRegulationDto = await this.incentiveRegulationBusinessService.getIncentiveRegulation(+id);
        if(incentiveRegulationDto === null) throw new NotFoundException();
        return incentiveRegulationDto;
    }

    @Delete('incentiveRegulations/:id/delete')
    @ApiResponse({ status: 200, description: 'IncentiveRegulation deleted.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    deleteIncentiveRegulation(@Param('id') id: number) {
        return this.incentiveRegulationBusinessService.deleteIncentiveRegulation(+id);
    }

}