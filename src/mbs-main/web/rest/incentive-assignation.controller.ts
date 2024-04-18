import { BadRequestException, Body, Controller, Delete, Get, NotFoundException, Param, Post, Put, Query } from "@nestjs/common";
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import { IncentiveAssignationBusinessService } from "../../business/incentive-assignation.business.service";
import { IncentiveAssignationDto } from "../../dto/incentive-assignation.dto";

@ApiTags('incentiveAssignation')
@Controller('mbs/main')
export class IncentiveAssignationController {
    constructor(
        private incentiveAssignationBusinessService: IncentiveAssignationBusinessService,

    ) {}

    @Post('incentiveAssignations')
    @ApiResponse({ status: 201, description: 'The record has been successfully created.'})
    @ApiResponse({ status: 400, description: 'Bad request.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    createIncentiveAssignation(@Body() incentiveAssignationDto: IncentiveAssignationDto) {
        if(incentiveAssignationDto.id !== undefined) {
            throw new BadRequestException("not insert id in creation");
        }
        return this.incentiveAssignationBusinessService.createIncentiveAssignation(incentiveAssignationDto);
    }

    @Put('incentiveAssignations')
    @ApiResponse({ status: 201, description: 'The record has been successfully updated.'})
    @ApiResponse({ status: 400, description: 'Bad request.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    updateIncentiveAssignation(@Body() incentiveAssignationDto: IncentiveAssignationDto) {
        if(incentiveAssignationDto.id === undefined) {
            throw new BadRequestException("id is required in update");
        }
        return this.incentiveAssignationBusinessService.editIncentiveAssignation(incentiveAssignationDto);
    }

    @Get('incentiveAssignations')
    @ApiResponse({ status: 200, description: 'List of incentiveAssignations.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    getAllIncentiveAssignations(@Query() queryParams): Promise<any> {
        let filters: any = queryParams;
        return this.incentiveAssignationBusinessService.searchIncentiveAssignations(filters);
    }

    @Get('incentiveAssignations/count')
    @ApiResponse({ status: 200, description: 'Count of incentiveAssignations.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    getIncentiveAssignationsCount(@Query() queryParams): Promise<number> {
        let filters: any = queryParams;
        return this.incentiveAssignationBusinessService.countIncentiveAssignations(filters);
    }

    @Get('incentiveAssignations/:id')
    @ApiResponse({ status: 200, description: 'IncentiveAssignation detail.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    async getIncentiveAssignation(@Param('id') id: number): Promise<IncentiveAssignationDto> {
        let incentiveAssignationDto: IncentiveAssignationDto = await this.incentiveAssignationBusinessService.getIncentiveAssignation(+id);
        if(incentiveAssignationDto === null) throw new NotFoundException();
        return incentiveAssignationDto;
    }

    @Delete('incentiveAssignations/:id/delete')
    @ApiResponse({ status: 200, description: 'IncentiveAssignation deleted.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    deleteIncentiveAssignation(@Param('id') id: number) {
        return this.incentiveAssignationBusinessService.deleteIncentiveAssignation(+id);
    }

}