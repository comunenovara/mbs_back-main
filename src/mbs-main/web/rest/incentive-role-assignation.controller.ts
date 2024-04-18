import { BadRequestException, Body, Controller, Delete, Get, NotFoundException, Param, Post, Put, Query } from "@nestjs/common";
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import { IncentiveRoleAssignationBusinessService } from "../../business/incentive-role-assignation.business.service";
import { IncentiveRoleAssignationDto } from "../../dto/incentive-role-assignation.dto";

@ApiTags('incentiveRoleAssignation')
@Controller('mbs/main')
export class IncentiveRoleAssignationController {
    constructor(
        private incentiveRoleAssignationBusinessService: IncentiveRoleAssignationBusinessService,

    ) {}

    @Post('incentiveRoleAssignations')
    @ApiResponse({ status: 201, description: 'The record has been successfully created.'})
    @ApiResponse({ status: 400, description: 'Bad request.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    createIncentiveRoleAssignation(@Body() incentiveRoleAssignationDto: IncentiveRoleAssignationDto) {
        if(incentiveRoleAssignationDto.id !== undefined) {
            throw new BadRequestException("not insert id in creation");
        }
        return this.incentiveRoleAssignationBusinessService.createIncentiveRoleAssignation(incentiveRoleAssignationDto);
    }

    @Put('incentiveRoleAssignations')
    @ApiResponse({ status: 201, description: 'The record has been successfully updated.'})
    @ApiResponse({ status: 400, description: 'Bad request.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    updateIncentiveRoleAssignation(@Body() incentiveRoleAssignationDto: IncentiveRoleAssignationDto) {
        if(incentiveRoleAssignationDto.id === undefined) {
            throw new BadRequestException("id is required in update");
        }
        return this.incentiveRoleAssignationBusinessService.editIncentiveRoleAssignation(incentiveRoleAssignationDto);
    }

    @Get('incentiveRoleAssignations')
    @ApiResponse({ status: 200, description: 'List of incentiveRoleAssignations.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    getAllIncentiveRoleAssignations(@Query() queryParams): Promise<any> {
        let filters: any = queryParams;
        return this.incentiveRoleAssignationBusinessService.searchIncentiveRoleAssignations(filters);
    }

    @Get('incentiveRoleAssignations/count')
    @ApiResponse({ status: 200, description: 'Count of incentiveRoleAssignations.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    getIncentiveRoleAssignationsCount(@Query() queryParams): Promise<number> {
        let filters: any = queryParams;
        return this.incentiveRoleAssignationBusinessService.countIncentiveRoleAssignations(filters);
    }

    @Get('incentiveRoleAssignations/:id')
    @ApiResponse({ status: 200, description: 'IncentiveRoleAssignation detail.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    async getIncentiveRoleAssignation(@Param('id') id: number): Promise<IncentiveRoleAssignationDto> {
        let incentiveRoleAssignationDto: IncentiveRoleAssignationDto = await this.incentiveRoleAssignationBusinessService.getIncentiveRoleAssignation(+id);
        if(incentiveRoleAssignationDto === null) throw new NotFoundException();
        return incentiveRoleAssignationDto;
    }

    @Delete('incentiveRoleAssignations/:id/delete')
    @ApiResponse({ status: 200, description: 'IncentiveRoleAssignation deleted.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    deleteIncentiveRoleAssignation(@Param('id') id: number) {
        return this.incentiveRoleAssignationBusinessService.deleteIncentiveRoleAssignation(+id);
    }

}