import { BadRequestException, Body, Controller, Delete, Get, NotFoundException, Param, Post, Put, Query } from "@nestjs/common";
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import { IncentiveCalculationFactorBusinessService } from "../../business/incentive-calculation-factor.business.service";
import { IncentiveCalculationFactorDto } from "../../dto/incentive-calculation-factor.dto";

@ApiTags('incentiveCalculationFactor')
@Controller('mbs/main')
export class IncentiveCalculationFactorController {
    constructor(
        private incentiveCalculationFactorBusinessService: IncentiveCalculationFactorBusinessService,

    ) {}

    @Post('incentiveCalculationFactors')
    @ApiResponse({ status: 201, description: 'The record has been successfully created.'})
    @ApiResponse({ status: 400, description: 'Bad request.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    createIncentiveCalculationFactor(@Body() incentiveCalculationFactorDto: IncentiveCalculationFactorDto) {
        if(incentiveCalculationFactorDto.id !== undefined) {
            throw new BadRequestException("not insert id in creation");
        }
        return this.incentiveCalculationFactorBusinessService.createIncentiveCalculationFactor(incentiveCalculationFactorDto);
    }

    @Put('incentiveCalculationFactors')
    @ApiResponse({ status: 201, description: 'The record has been successfully updated.'})
    @ApiResponse({ status: 400, description: 'Bad request.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    updateIncentiveCalculationFactor(@Body() incentiveCalculationFactorDto: IncentiveCalculationFactorDto) {
        if(incentiveCalculationFactorDto.id === undefined) {
            throw new BadRequestException("id is required in update");
        }
        return this.incentiveCalculationFactorBusinessService.editIncentiveCalculationFactor(incentiveCalculationFactorDto);
    }

    @Get('incentiveCalculationFactors')
    @ApiResponse({ status: 200, description: 'List of incentiveCalculationFactors.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    getAllIncentiveCalculationFactors(@Query() queryParams): Promise<any> {
        let filters: any = queryParams;
        return this.incentiveCalculationFactorBusinessService.searchIncentiveCalculationFactors(filters);
    }

    @Get('incentiveCalculationFactors/count')
    @ApiResponse({ status: 200, description: 'Count of incentiveCalculationFactors.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    getIncentiveCalculationFactorsCount(@Query() queryParams): Promise<number> {
        let filters: any = queryParams;
        return this.incentiveCalculationFactorBusinessService.countIncentiveCalculationFactors(filters);
    }

    @Get('incentiveCalculationFactors/:id')
    @ApiResponse({ status: 200, description: 'IncentiveCalculationFactor detail.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    async getIncentiveCalculationFactor(@Param('id') id: number): Promise<IncentiveCalculationFactorDto> {
        let incentiveCalculationFactorDto: IncentiveCalculationFactorDto = await this.incentiveCalculationFactorBusinessService.getIncentiveCalculationFactor(+id);
        if(incentiveCalculationFactorDto === null) throw new NotFoundException();
        return incentiveCalculationFactorDto;
    }

    @Delete('incentiveCalculationFactors/:id/delete')
    @ApiResponse({ status: 200, description: 'IncentiveCalculationFactor deleted.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    deleteIncentiveCalculationFactor(@Param('id') id: number) {
        return this.incentiveCalculationFactorBusinessService.deleteIncentiveCalculationFactor(+id);
    }

}