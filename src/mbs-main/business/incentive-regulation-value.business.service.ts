import { Injectable } from "@nestjs/common";
import { IncentiveRegulationValueDto } from "../dto/incentive-regulation-value.dto";
import { IncentiveRegulationValueEntityService } from "../entity/incentive-regulation-value.entity.service";

@Injectable({})
export class IncentiveRegulationValueBusinessService {
	constructor(
		private incentiveRegulationValueEntityService: IncentiveRegulationValueEntityService,
	) {}

	async createIncentiveRegulationValue(incentiveRegulationValueDto: IncentiveRegulationValueDto) {
		return this.incentiveRegulationValueEntityService.insertIncentiveRegulationValue(incentiveRegulationValueDto);
	}

	async editIncentiveRegulationValue(incentiveRegulationValueDto: IncentiveRegulationValueDto) {
		return this.incentiveRegulationValueEntityService.updateIncentiveRegulationValue(incentiveRegulationValueDto);
	}

	async searchIncentiveRegulationValues(filters: any): Promise<IncentiveRegulationValueDto[]> {
		return this.incentiveRegulationValueEntityService.getIncentiveRegulationValues(filters);
	}

	async countIncentiveRegulationValues(filters: any): Promise<number> {
		return this.incentiveRegulationValueEntityService.countIncentiveRegulationValues(filters);
	}

	async getIncentiveRegulationValue(id: number): Promise<IncentiveRegulationValueDto> {
		return this.incentiveRegulationValueEntityService.getIncentiveRegulationValue(id);
	}

	async deleteIncentiveRegulationValue(id: number) {
		return this.incentiveRegulationValueEntityService.deleteIncentiveRegulationValue(id);
	}
}