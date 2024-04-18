import { BadRequestException, Body, Controller, Delete, Get, NotFoundException, Param, Post, Put, Query } from "@nestjs/common";
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import { IncentiveCalculationBusinessService } from "../../business/incentive-calculation.business.service";
import { IncentiveCalculationDto } from "../../dto/incentive-calculation.dto";

@ApiTags('incentiveCalculation')
@Controller('mbs/main')
export class IncentiveCalculationController {
    constructor(
        private incentiveCalculationBusinessService: IncentiveCalculationBusinessService,

    ) {}

    @Post('incentiveCalculations')
    @ApiResponse({ status: 201, description: 'The record has been successfully created.'})
    @ApiResponse({ status: 400, description: 'Bad request.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    createIncentiveCalculation(@Body() incentiveCalculationDto: IncentiveCalculationDto) {
        if(incentiveCalculationDto.id !== undefined) {
            throw new BadRequestException("not insert id in creation");
        }
        return this.incentiveCalculationBusinessService.createIncentiveCalculation(incentiveCalculationDto);
    }

    @Put('incentiveCalculations')
    @ApiResponse({ status: 201, description: 'The record has been successfully updated.'})
    @ApiResponse({ status: 400, description: 'Bad request.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    updateIncentiveCalculation(@Body() incentiveCalculationDto: IncentiveCalculationDto) {
        if(incentiveCalculationDto.id === undefined) {
            throw new BadRequestException("id is required in update");
        }
        return this.incentiveCalculationBusinessService.editIncentiveCalculation(incentiveCalculationDto);
    }

    @Get('incentiveCalculations')
    @ApiResponse({ status: 200, description: 'List of incentiveCalculations.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    getAllIncentiveCalculations(@Query() queryParams): Promise<any> {
        let filters: any = queryParams;
        return this.incentiveCalculationBusinessService.searchIncentiveCalculations(filters);
    }

    @Get('incentiveCalculations/count')
    @ApiResponse({ status: 200, description: 'Count of incentiveCalculations.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    getIncentiveCalculationsCount(@Query() queryParams): Promise<number> {
        let filters: any = queryParams;
        return this.incentiveCalculationBusinessService.countIncentiveCalculations(filters);
    }

    @Get('incentiveCalculations/:id')
    @ApiResponse({ status: 200, description: 'IncentiveCalculation detail.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    async getIncentiveCalculation(@Param('id') id: number): Promise<IncentiveCalculationDto> {
        let incentiveCalculationDto: IncentiveCalculationDto = await this.incentiveCalculationBusinessService.getIncentiveCalculation(+id);
        if(incentiveCalculationDto === null) throw new NotFoundException();
        return incentiveCalculationDto;
    }

    @Delete('incentiveCalculations/:id/delete')
    @ApiResponse({ status: 200, description: 'IncentiveCalculation deleted.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    deleteIncentiveCalculation(@Param('id') id: number) {
        return this.incentiveCalculationBusinessService.deleteIncentiveCalculation(+id);
    }

}