import { BadRequestException, Body, Controller, Delete, Get, NotFoundException, Param, Post, Put, Query } from "@nestjs/common";
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import { IncentiveCalculationValueBusinessService } from "../../business/incentive-calculation-value.business.service";
import { IncentiveCalculationValueDto } from "../../dto/incentive-calculation-value.dto";

@ApiTags('incentiveCalculationValue')
@Controller('mbs/main')
export class IncentiveCalculationValueController {
    constructor(
        private incentiveCalculationValueBusinessService: IncentiveCalculationValueBusinessService,

    ) {}

    @Post('incentiveCalculationValues')
    @ApiResponse({ status: 201, description: 'The record has been successfully created.'})
    @ApiResponse({ status: 400, description: 'Bad request.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    createIncentiveCalculationValue(@Body() incentiveCalculationValueDto: IncentiveCalculationValueDto) {
        if(incentiveCalculationValueDto.id !== undefined) {
            throw new BadRequestException("not insert id in creation");
        }
        return this.incentiveCalculationValueBusinessService.createIncentiveCalculationValue(incentiveCalculationValueDto);
    }

    @Put('incentiveCalculationValues')
    @ApiResponse({ status: 201, description: 'The record has been successfully updated.'})
    @ApiResponse({ status: 400, description: 'Bad request.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    updateIncentiveCalculationValue(@Body() incentiveCalculationValueDto: IncentiveCalculationValueDto) {
        if(incentiveCalculationValueDto.id === undefined) {
            throw new BadRequestException("id is required in update");
        }
        return this.incentiveCalculationValueBusinessService.editIncentiveCalculationValue(incentiveCalculationValueDto);
    }

    @Get('incentiveCalculationValues')
    @ApiResponse({ status: 200, description: 'List of incentiveCalculationValues.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    getAllIncentiveCalculationValues(@Query() queryParams): Promise<any> {
        let filters: any = queryParams;
        return this.incentiveCalculationValueBusinessService.searchIncentiveCalculationValues(filters);
    }

    @Get('incentiveCalculationValues/count')
    @ApiResponse({ status: 200, description: 'Count of incentiveCalculationValues.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    getIncentiveCalculationValuesCount(@Query() queryParams): Promise<number> {
        let filters: any = queryParams;
        return this.incentiveCalculationValueBusinessService.countIncentiveCalculationValues(filters);
    }

    @Get('incentiveCalculationValues/:id')
    @ApiResponse({ status: 200, description: 'IncentiveCalculationValue detail.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    async getIncentiveCalculationValue(@Param('id') id: number): Promise<IncentiveCalculationValueDto> {
        let incentiveCalculationValueDto: IncentiveCalculationValueDto = await this.incentiveCalculationValueBusinessService.getIncentiveCalculationValue(+id);
        if(incentiveCalculationValueDto === null) throw new NotFoundException();
        return incentiveCalculationValueDto;
    }

    @Delete('incentiveCalculationValues/:id/delete')
    @ApiResponse({ status: 200, description: 'IncentiveCalculationValue deleted.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    deleteIncentiveCalculationValue(@Param('id') id: number) {
        return this.incentiveCalculationValueBusinessService.deleteIncentiveCalculationValue(+id);
    }

}