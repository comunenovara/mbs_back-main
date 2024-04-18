import { BadRequestException, Body, Controller, Delete, Get, NotFoundException, Param, Post, Put, Query } from "@nestjs/common";
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import { GovernativeProjectBusinessService } from "../../business/governative-project.business.service";
import { GovernativeProjectDto } from "../../dto/governative-project.dto";

@ApiTags('governativeProject')
@Controller('mbs/main')
export class GovernativeProjectController {
    constructor(
        private governativeProjectBusinessService: GovernativeProjectBusinessService,

    ) {}

    @Post('governativeProjects')
    @ApiResponse({ status: 201, description: 'The record has been successfully created.'})
    @ApiResponse({ status: 400, description: 'Bad request.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    createGovernativeProject(@Body() governativeProjectDto: GovernativeProjectDto) {
        if(governativeProjectDto.id !== undefined) {
            throw new BadRequestException("not insert id in creation");
        }
        return this.governativeProjectBusinessService.createGovernativeProject(governativeProjectDto);
    }

    @Put('governativeProjects')
    @ApiResponse({ status: 201, description: 'The record has been successfully updated.'})
    @ApiResponse({ status: 400, description: 'Bad request.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    updateGovernativeProject(@Body() governativeProjectDto: GovernativeProjectDto) {
        if(governativeProjectDto.id === undefined) {
            throw new BadRequestException("id is required in update");
        }
        return this.governativeProjectBusinessService.editGovernativeProject(governativeProjectDto);
    }

    @Get('governativeProjects')
    @ApiResponse({ status: 200, description: 'List of governativeProjects.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    getAllGovernativeProjects(@Query() queryParams): Promise<any> {
        let filters: any = queryParams;
        return this.governativeProjectBusinessService.searchGovernativeProjects(filters);
    }

    @Get('governativeProjects/count')
    @ApiResponse({ status: 200, description: 'Count of governativeProjects.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    getGovernativeProjectsCount(@Query() queryParams): Promise<number> {
        let filters: any = queryParams;
        return this.governativeProjectBusinessService.countGovernativeProjects(filters);
    }

    @Get('governativeProjects/:id')
    @ApiResponse({ status: 200, description: 'GovernativeProject detail.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    async getGovernativeProject(@Param('id') id: number): Promise<GovernativeProjectDto> {
        let governativeProjectDto: GovernativeProjectDto = await this.governativeProjectBusinessService.getGovernativeProject(+id);
        if(governativeProjectDto === null) throw new NotFoundException();
        return governativeProjectDto;
    }

    @Delete('governativeProjects/:id/delete')
    @ApiResponse({ status: 200, description: 'GovernativeProject deleted.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    deleteGovernativeProject(@Param('id') id: number) {
        return this.governativeProjectBusinessService.deleteGovernativeProject(+id);
    }

}