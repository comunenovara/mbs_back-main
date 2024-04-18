import { BadRequestException, Body, Controller, Delete, Get, NotFoundException, Param, Post, Put, Query } from "@nestjs/common";
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import { IncentiveRegulationValueBusinessService } from "../../business/incentive-regulation-value.business.service";
import { IncentiveRegulationValueDto } from "../../dto/incentive-regulation-value.dto";

@ApiTags('incentiveRegulationValue')
@Controller('mbs/main')
export class IncentiveRegulationValueController {
    constructor(
        private incentiveRegulationValueBusinessService: IncentiveRegulationValueBusinessService,

    ) {}

    @Post('incentiveRegulationValues')
    @ApiResponse({ status: 201, description: 'The record has been successfully created.'})
    @ApiResponse({ status: 400, description: 'Bad request.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    createIncentiveRegulationValue(@Body() incentiveRegulationValueDto: IncentiveRegulationValueDto) {
        if(incentiveRegulationValueDto.id !== undefined) {
            throw new BadRequestException("not insert id in creation");
        }
        return this.incentiveRegulationValueBusinessService.createIncentiveRegulationValue(incentiveRegulationValueDto);
    }

    @Put('incentiveRegulationValues')
    @ApiResponse({ status: 201, description: 'The record has been successfully updated.'})
    @ApiResponse({ status: 400, description: 'Bad request.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    updateIncentiveRegulationValue(@Body() incentiveRegulationValueDto: IncentiveRegulationValueDto) {
        if(incentiveRegulationValueDto.id === undefined) {
            throw new BadRequestException("id is required in update");
        }
        return this.incentiveRegulationValueBusinessService.editIncentiveRegulationValue(incentiveRegulationValueDto);
    }

    @Get('incentiveRegulationValues')
    @ApiResponse({ status: 200, description: 'List of incentiveRegulationValues.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    getAllIncentiveRegulationValues(@Query() queryParams): Promise<any> {
        let filters: any = queryParams;
        return this.incentiveRegulationValueBusinessService.searchIncentiveRegulationValues(filters);
    }

    @Get('incentiveRegulationValues/count')
    @ApiResponse({ status: 200, description: 'Count of incentiveRegulationValues.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    getIncentiveRegulationValuesCount(@Query() queryParams): Promise<number> {
        let filters: any = queryParams;
        return this.incentiveRegulationValueBusinessService.countIncentiveRegulationValues(filters);
    }

    @Get('incentiveRegulationValues/:id')
    @ApiResponse({ status: 200, description: 'IncentiveRegulationValue detail.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    async getIncentiveRegulationValue(@Param('id') id: number): Promise<IncentiveRegulationValueDto> {
        let incentiveRegulationValueDto: IncentiveRegulationValueDto = await this.incentiveRegulationValueBusinessService.getIncentiveRegulationValue(+id);
        if(incentiveRegulationValueDto === null) throw new NotFoundException();
        return incentiveRegulationValueDto;
    }

    @Delete('incentiveRegulationValues/:id/delete')
    @ApiResponse({ status: 200, description: 'IncentiveRegulationValue deleted.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    deleteIncentiveRegulationValue(@Param('id') id: number) {
        return this.incentiveRegulationValueBusinessService.deleteIncentiveRegulationValue(+id);
    }

}