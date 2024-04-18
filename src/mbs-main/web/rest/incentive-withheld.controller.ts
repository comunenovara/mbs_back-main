import { BadRequestException, Body, Controller, Delete, Get, NotFoundException, Param, Post, Put, Query } from "@nestjs/common";
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import { IncentiveWithheldBusinessService } from "../../business/incentive-withheld.business.service";
import { IncentiveWithheldDto } from "../../dto/incentive-withheld.dto";

@ApiTags('incentiveWithheld')
@Controller('mbs/main')
export class IncentiveWithheldController {
    constructor(
        private incentiveWithheldBusinessService: IncentiveWithheldBusinessService,

    ) {}

    @Post('incentiveWithhelds')
    @ApiResponse({ status: 201, description: 'The record has been successfully created.'})
    @ApiResponse({ status: 400, description: 'Bad request.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    createIncentiveWithheld(@Body() incentiveWithheldDto: IncentiveWithheldDto) {
        if(incentiveWithheldDto.id !== undefined) {
            throw new BadRequestException("not insert id in creation");
        }
        return this.incentiveWithheldBusinessService.createIncentiveWithheld(incentiveWithheldDto);
    }

    @Put('incentiveWithhelds')
    @ApiResponse({ status: 201, description: 'The record has been successfully updated.'})
    @ApiResponse({ status: 400, description: 'Bad request.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    updateIncentiveWithheld(@Body() incentiveWithheldDto: IncentiveWithheldDto) {
        if(incentiveWithheldDto.id === undefined) {
            throw new BadRequestException("id is required in update");
        }
        return this.incentiveWithheldBusinessService.editIncentiveWithheld(incentiveWithheldDto);
    }

    @Get('incentiveWithhelds')
    @ApiResponse({ status: 200, description: 'List of incentiveWithhelds.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    getAllIncentiveWithhelds(@Query() queryParams): Promise<any> {
        let filters: any = queryParams;
        return this.incentiveWithheldBusinessService.searchIncentiveWithhelds(filters);
    }

    @Get('incentiveWithhelds/count')
    @ApiResponse({ status: 200, description: 'Count of incentiveWithhelds.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    getIncentiveWithheldsCount(@Query() queryParams): Promise<number> {
        let filters: any = queryParams;
        return this.incentiveWithheldBusinessService.countIncentiveWithhelds(filters);
    }

    @Get('incentiveWithhelds/:id')
    @ApiResponse({ status: 200, description: 'IncentiveWithheld detail.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    async getIncentiveWithheld(@Param('id') id: number): Promise<IncentiveWithheldDto> {
        let incentiveWithheldDto: IncentiveWithheldDto = await this.incentiveWithheldBusinessService.getIncentiveWithheld(+id);
        if(incentiveWithheldDto === null) throw new NotFoundException();
        return incentiveWithheldDto;
    }

    @Delete('incentiveWithhelds/:id/delete')
    @ApiResponse({ status: 200, description: 'IncentiveWithheld deleted.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    deleteIncentiveWithheld(@Param('id') id: number) {
        return this.incentiveWithheldBusinessService.deleteIncentiveWithheld(+id);
    }

}