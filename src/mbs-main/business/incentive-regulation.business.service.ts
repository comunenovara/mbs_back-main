import { Injectable } from "@nestjs/common";
import { IncentiveRegulationDto } from "../dto/incentive-regulation.dto";
import { IncentiveRegulationEntityService } from "../entity/incentive-regulation.entity.service";

@Injectable({})
export class IncentiveRegulationBusinessService {
	constructor(
		private incentiveRegulationEntityService: IncentiveRegulationEntityService,
	) {}

	async createIncentiveRegulation(incentiveRegulationDto: IncentiveRegulationDto) {
		return this.incentiveRegulationEntityService.insertIncentiveRegulation(incentiveRegulationDto);
	}

	async editIncentiveRegulation(incentiveRegulationDto: IncentiveRegulationDto) {
		return this.incentiveRegulationEntityService.updateIncentiveRegulation(incentiveRegulationDto);
	}

	async searchIncentiveRegulations(filters: any): Promise<IncentiveRegulationDto[]> {
		return this.incentiveRegulationEntityService.getIncentiveRegulations(filters);
	}

	async countIncentiveRegulations(filters: any): Promise<number> {
		return this.incentiveRegulationEntityService.countIncentiveRegulations(filters);
	}

	async getIncentiveRegulation(id: number): Promise<IncentiveRegulationDto> {
		return this.incentiveRegulationEntityService.getIncentiveRegulation(id);
	}

	async deleteIncentiveRegulation(id: number) {
		return this.incentiveRegulationEntityService.deleteIncentiveRegulation(id);
	}
}