import { BadRequestException, Body, Controller, Delete, Get, NotFoundException, Param, Post, Put, Query } from "@nestjs/common";
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import { ElaborateGroupBusinessService } from "../../business/elaborate-group.business.service";
import { ElaborateGroupDto } from "../../dto/elaborate-group.dto";

@ApiTags('elaborateGroup')
@Controller('mbs/main')
export class ElaborateGroupController {
    constructor(
        private elaborateGroupBusinessService: ElaborateGroupBusinessService,

    ) {}

    @Post('elaborateGroups')
    @ApiResponse({ status: 201, description: 'The record has been successfully created.'})
    @ApiResponse({ status: 400, description: 'Bad request.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    createElaborateGroup(@Body() elaborateGroupDto: ElaborateGroupDto) {
        if(elaborateGroupDto.id !== undefined) {
            throw new BadRequestException("not insert id in creation");
        }
        return this.elaborateGroupBusinessService.createElaborateGroup(elaborateGroupDto);
    }

    @Put('elaborateGroups')
    @ApiResponse({ status: 201, description: 'The record has been successfully updated.'})
    @ApiResponse({ status: 400, description: 'Bad request.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    updateElaborateGroup(@Body() elaborateGroupDto: ElaborateGroupDto) {
        if(elaborateGroupDto.id === undefined) {
            throw new BadRequestException("id is required in update");
        }
        return this.elaborateGroupBusinessService.editElaborateGroup(elaborateGroupDto);
    }

    @Get('elaborateGroups')
    @ApiResponse({ status: 200, description: 'List of elaborateGroups.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    getAllElaborateGroups(@Query() queryParams): Promise<any> {
        let filters: any = queryParams;
        return this.elaborateGroupBusinessService.searchElaborateGroups(filters);
    }

    @Get('elaborateGroups/count')
    @ApiResponse({ status: 200, description: 'Count of elaborateGroups.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    getElaborateGroupsCount(@Query() queryParams): Promise<number> {
        let filters: any = queryParams;
        return this.elaborateGroupBusinessService.countElaborateGroups(filters);
    }

    @Get('elaborateGroups/:id')
    @ApiResponse({ status: 200, description: 'ElaborateGroup detail.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    async getElaborateGroup(@Param('id') id: number): Promise<ElaborateGroupDto> {
        let elaborateGroupDto: ElaborateGroupDto = await this.elaborateGroupBusinessService.getElaborateGroup(+id);
        if(elaborateGroupDto === null) throw new NotFoundException();
        return elaborateGroupDto;
    }

    @Delete('elaborateGroups/:id/delete')
    @ApiResponse({ status: 200, description: 'ElaborateGroup deleted.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    deleteElaborateGroup(@Param('id') id: number) {
        return this.elaborateGroupBusinessService.deleteElaborateGroup(+id);
    }

}