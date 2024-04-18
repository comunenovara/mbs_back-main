import { BadRequestException, Body, Controller, Delete, Get, NotFoundException, Param, Post, Put, Query } from "@nestjs/common";
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import { IncentiveCalculationMethodBusinessService } from "../../business/incentive-calculation-method.business.service";
import { IncentiveCalculationMethodDto } from "../../dto/incentive-calculation-method.dto";

@ApiTags('incentiveCalculationMethod')
@Controller('mbs/main')
export class IncentiveCalculationMethodController {
    constructor(
        private incentiveCalculationMethodBusinessService: IncentiveCalculationMethodBusinessService,

    ) {}

    @Post('incentiveCalculationMethods')
    @ApiResponse({ status: 201, description: 'The record has been successfully created.'})
    @ApiResponse({ status: 400, description: 'Bad request.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    createIncentiveCalculationMethod(@Body() incentiveCalculationMethodDto: IncentiveCalculationMethodDto) {
        if(incentiveCalculationMethodDto.id !== undefined) {
            throw new BadRequestException("not insert id in creation");
        }
        return this.incentiveCalculationMethodBusinessService.createIncentiveCalculationMethod(incentiveCalculationMethodDto);
    }

    @Put('incentiveCalculationMethods')
    @ApiResponse({ status: 201, description: 'The record has been successfully updated.'})
    @ApiResponse({ status: 400, description: 'Bad request.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    updateIncentiveCalculationMethod(@Body() incentiveCalculationMethodDto: IncentiveCalculationMethodDto) {
        if(incentiveCalculationMethodDto.id === undefined) {
            throw new BadRequestException("id is required in update");
        }
        return this.incentiveCalculationMethodBusinessService.editIncentiveCalculationMethod(incentiveCalculationMethodDto);
    }

    @Get('incentiveCalculationMethods')
    @ApiResponse({ status: 200, description: 'List of incentiveCalculationMethods.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    getAllIncentiveCalculationMethods(@Query() queryParams): Promise<any> {
        let filters: any = queryParams;
        return this.incentiveCalculationMethodBusinessService.searchIncentiveCalculationMethods(filters);
    }

    @Get('incentiveCalculationMethods/count')
    @ApiResponse({ status: 200, description: 'Count of incentiveCalculationMethods.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    getIncentiveCalculationMethodsCount(@Query() queryParams): Promise<number> {
        let filters: any = queryParams;
        return this.incentiveCalculationMethodBusinessService.countIncentiveCalculationMethods(filters);
    }

    @Get('incentiveCalculationMethods/:id')
    @ApiResponse({ status: 200, description: 'IncentiveCalculationMethod detail.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    async getIncentiveCalculationMethod(@Param('id') id: number): Promise<IncentiveCalculationMethodDto> {
        let incentiveCalculationMethodDto: IncentiveCalculationMethodDto = await this.incentiveCalculationMethodBusinessService.getIncentiveCalculationMethod(+id);
        if(incentiveCalculationMethodDto === null) throw new NotFoundException();
        return incentiveCalculationMethodDto;
    }

    @Delete('incentiveCalculationMethods/:id/delete')
    @ApiResponse({ status: 200, description: 'IncentiveCalculationMethod deleted.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    deleteIncentiveCalculationMethod(@Param('id') id: number) {
        return this.incentiveCalculationMethodBusinessService.deleteIncentiveCalculationMethod(+id);
    }

}