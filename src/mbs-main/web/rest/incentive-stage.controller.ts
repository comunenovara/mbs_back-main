import { BadRequestException, Body, Controller, Delete, Get, NotFoundException, Param, Post, Put, Query } from "@nestjs/common";
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import { IncentiveStageBusinessService } from "../../business/incentive-stage.business.service";
import { IncentiveStageDto } from "../../dto/incentive-stage.dto";

@ApiTags('incentiveStage')
@Controller('mbs/main')
export class IncentiveStageController {
    constructor(
        private incentiveStageBusinessService: IncentiveStageBusinessService,

    ) {}

    @Post('incentiveStages')
    @ApiResponse({ status: 201, description: 'The record has been successfully created.'})
    @ApiResponse({ status: 400, description: 'Bad request.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    createIncentiveStage(@Body() incentiveStageDto: IncentiveStageDto) {
        if(incentiveStageDto.id !== undefined) {
            throw new BadRequestException("not insert id in creation");
        }
        return this.incentiveStageBusinessService.createIncentiveStage(incentiveStageDto);
    }

    @Put('incentiveStages')
    @ApiResponse({ status: 201, description: 'The record has been successfully updated.'})
    @ApiResponse({ status: 400, description: 'Bad request.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    updateIncentiveStage(@Body() incentiveStageDto: IncentiveStageDto) {
        if(incentiveStageDto.id === undefined) {
            throw new BadRequestException("id is required in update");
        }
        return this.incentiveStageBusinessService.editIncentiveStage(incentiveStageDto);
    }

    @Get('incentiveStages')
    @ApiResponse({ status: 200, description: 'List of incentiveStages.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    getAllIncentiveStages(@Query() queryParams): Promise<any> {
        let filters: any = queryParams;
        return this.incentiveStageBusinessService.searchIncentiveStages(filters);
    }

    @Get('incentiveStages/count')
    @ApiResponse({ status: 200, description: 'Count of incentiveStages.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    getIncentiveStagesCount(@Query() queryParams): Promise<number> {
        let filters: any = queryParams;
        return this.incentiveStageBusinessService.countIncentiveStages(filters);
    }

    @Get('incentiveStages/:id')
    @ApiResponse({ status: 200, description: 'IncentiveStage detail.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    async getIncentiveStage(@Param('id') id: number): Promise<IncentiveStageDto> {
        let incentiveStageDto: IncentiveStageDto = await this.incentiveStageBusinessService.getIncentiveStage(+id);
        if(incentiveStageDto === null) throw new NotFoundException();
        return incentiveStageDto;
    }

    @Delete('incentiveStages/:id/delete')
    @ApiResponse({ status: 200, description: 'IncentiveStage deleted.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    deleteIncentiveStage(@Param('id') id: number) {
        return this.incentiveStageBusinessService.deleteIncentiveStage(+id);
    }

}