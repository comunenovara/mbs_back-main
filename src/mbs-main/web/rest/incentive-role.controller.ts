import { BadRequestException, Body, Controller, Delete, Get, NotFoundException, Param, Post, Put, Query } from "@nestjs/common";
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import { IncentiveRoleBusinessService } from "../../business/incentive-role.business.service";
import { IncentiveRoleDto } from "../../dto/incentive-role.dto";

@ApiTags('incentiveRole')
@Controller('mbs/main')
export class IncentiveRoleController {
    constructor(
        private incentiveRoleBusinessService: IncentiveRoleBusinessService,

    ) {}

    @Post('incentiveRoles')
    @ApiResponse({ status: 201, description: 'The record has been successfully created.'})
    @ApiResponse({ status: 400, description: 'Bad request.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    createIncentiveRole(@Body() incentiveRoleDto: IncentiveRoleDto) {
        if(incentiveRoleDto.id !== undefined) {
            throw new BadRequestException("not insert id in creation");
        }
        return this.incentiveRoleBusinessService.createIncentiveRole(incentiveRoleDto);
    }

    @Put('incentiveRoles')
    @ApiResponse({ status: 201, description: 'The record has been successfully updated.'})
    @ApiResponse({ status: 400, description: 'Bad request.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    updateIncentiveRole(@Body() incentiveRoleDto: IncentiveRoleDto) {
        if(incentiveRoleDto.id === undefined) {
            throw new BadRequestException("id is required in update");
        }
        return this.incentiveRoleBusinessService.editIncentiveRole(incentiveRoleDto);
    }

    @Get('incentiveRoles')
    @ApiResponse({ status: 200, description: 'List of incentiveRoles.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    getAllIncentiveRoles(@Query() queryParams): Promise<any> {
        let filters: any = queryParams;
        return this.incentiveRoleBusinessService.searchIncentiveRoles(filters);
    }

    @Get('incentiveRoles/count')
    @ApiResponse({ status: 200, description: 'Count of incentiveRoles.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    getIncentiveRolesCount(@Query() queryParams): Promise<number> {
        let filters: any = queryParams;
        return this.incentiveRoleBusinessService.countIncentiveRoles(filters);
    }

    @Get('incentiveRoles/:id')
    @ApiResponse({ status: 200, description: 'IncentiveRole detail.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    async getIncentiveRole(@Param('id') id: number): Promise<IncentiveRoleDto> {
        let incentiveRoleDto: IncentiveRoleDto = await this.incentiveRoleBusinessService.getIncentiveRole(+id);
        if(incentiveRoleDto === null) throw new NotFoundException();
        return incentiveRoleDto;
    }

    @Delete('incentiveRoles/:id/delete')
    @ApiResponse({ status: 200, description: 'IncentiveRole deleted.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    deleteIncentiveRole(@Param('id') id: number) {
        return this.incentiveRoleBusinessService.deleteIncentiveRole(+id);
    }

}