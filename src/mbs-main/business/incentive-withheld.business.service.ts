import { Injectable } from "@nestjs/common";
import { IncentiveWithheldDto } from "../dto/incentive-withheld.dto";
import { IncentiveWithheldEntityService } from "../entity/incentive-withheld.entity.service";

@Injectable({})
export class IncentiveWithheldBusinessService {
	constructor(
		private incentiveWithheldEntityService: IncentiveWithheldEntityService,
	) {}

	async createIncentiveWithheld(incentiveWithheldDto: IncentiveWithheldDto) {
		return this.incentiveWithheldEntityService.insertIncentiveWithheld(incentiveWithheldDto);
	}

	async editIncentiveWithheld(incentiveWithheldDto: IncentiveWithheldDto) {
		return this.incentiveWithheldEntityService.updateIncentiveWithheld(incentiveWithheldDto);
	}

	async searchIncentiveWithhelds(filters: any): Promise<IncentiveWithheldDto[]> {
		return this.incentiveWithheldEntityService.getIncentiveWithhelds(filters);
	}

	async countIncentiveWithhelds(filters: any): Promise<number> {
		return this.incentiveWithheldEntityService.countIncentiveWithhelds(filters);
	}

	async getIncentiveWithheld(id: number): Promise<IncentiveWithheldDto> {
		return this.incentiveWithheldEntityService.getIncentiveWithheld(id);
	}

	async deleteIncentiveWithheld(id: number) {
		return this.incentiveWithheldEntityService.deleteIncentiveWithheld(id);
	}
}