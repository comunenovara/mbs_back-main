import { BadRequestException, Body, Controller, Delete, Get, NotFoundException, Param, Post, Put, Query } from "@nestjs/common";
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import { IncentiveBeneficiaryBusinessService } from "../../business/incentive-beneficiary.business.service";
import { IncentiveBeneficiaryDto } from "../../dto/incentive-beneficiary.dto";

@ApiTags('incentiveBeneficiary')
@Controller('mbs/main')
export class IncentiveBeneficiaryController {
    constructor(
        private incentiveBeneficiaryBusinessService: IncentiveBeneficiaryBusinessService,

    ) {}

    @Post('incentiveBeneficiarys')
    @ApiResponse({ status: 201, description: 'The record has been successfully created.'})
    @ApiResponse({ status: 400, description: 'Bad request.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    createIncentiveBeneficiary(@Body() incentiveBeneficiaryDto: IncentiveBeneficiaryDto) {
        if(incentiveBeneficiaryDto.id !== undefined) {
            throw new BadRequestException("not insert id in creation");
        }
        return this.incentiveBeneficiaryBusinessService.createIncentiveBeneficiary(incentiveBeneficiaryDto);
    }

    @Put('incentiveBeneficiarys')
    @ApiResponse({ status: 201, description: 'The record has been successfully updated.'})
    @ApiResponse({ status: 400, description: 'Bad request.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    updateIncentiveBeneficiary(@Body() incentiveBeneficiaryDto: IncentiveBeneficiaryDto) {
        if(incentiveBeneficiaryDto.id === undefined) {
            throw new BadRequestException("id is required in update");
        }
        return this.incentiveBeneficiaryBusinessService.editIncentiveBeneficiary(incentiveBeneficiaryDto);
    }

    @Get('incentiveBeneficiarys')
    @ApiResponse({ status: 200, description: 'List of incentiveBeneficiarys.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    getAllIncentiveBeneficiarys(@Query() queryParams): Promise<any> {
        let filters: any = queryParams;
        return this.incentiveBeneficiaryBusinessService.searchIncentiveBeneficiaries(filters);
    }

    @Get('incentiveBeneficiarys/count')
    @ApiResponse({ status: 200, description: 'Count of incentiveBeneficiarys.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    getIncentiveBeneficiarysCount(@Query() queryParams): Promise<number> {
        let filters: any = queryParams;
        return this.incentiveBeneficiaryBusinessService.countIncentiveBeneficiaries(filters);
    }

    @Get('incentiveBeneficiarys/:id')
    @ApiResponse({ status: 200, description: 'IncentiveBeneficiary detail.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    async getIncentiveBeneficiary(@Param('id') id: number): Promise<IncentiveBeneficiaryDto> {
        let incentiveBeneficiaryDto: IncentiveBeneficiaryDto = await this.incentiveBeneficiaryBusinessService.getIncentiveBeneficiary(+id);
        if(incentiveBeneficiaryDto === null) throw new NotFoundException();
        return incentiveBeneficiaryDto;
    }

    @Delete('incentiveBeneficiarys/:id/delete')
    @ApiResponse({ status: 200, description: 'IncentiveBeneficiary deleted.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    deleteIncentiveBeneficiary(@Param('id') id: number) {
        return this.incentiveBeneficiaryBusinessService.deleteIncentiveBeneficiary(+id);
    }

}