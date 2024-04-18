import { Injectable } from "@nestjs/common";
import { IncentiveCalculationValueDto } from "../dto/incentive-calculation-value.dto";
import { IncentiveCalculationValueEntityService } from "../entity/incentive-calculation-value.entity.service";

@Injectable({})
export class IncentiveCalculationValueBusinessService {
	constructor(
		private incentiveCalculationValueEntityService: IncentiveCalculationValueEntityService,
	) {}

	async createIncentiveCalculationValue(incentiveCalculationValueDto: IncentiveCalculationValueDto) {
		return this.incentiveCalculationValueEntityService.insertIncentiveCalculationValue(incentiveCalculationValueDto);
	}

	async editIncentiveCalculationValue(incentiveCalculationValueDto: IncentiveCalculationValueDto) {
		return this.incentiveCalculationValueEntityService.updateIncentiveCalculationValue(incentiveCalculationValueDto);
	}

	async searchIncentiveCalculationValues(filters: any): Promise<IncentiveCalculationValueDto[]> {
		return this.incentiveCalculationValueEntityService.getIncentiveCalculationValues(filters);
	}

	async countIncentiveCalculationValues(filters: any): Promise<number> {
		return this.incentiveCalculationValueEntityService.countIncentiveCalculationValues(filters);
	}

	async getIncentiveCalculationValue(id: number): Promise<IncentiveCalculationValueDto> {
		return this.incentiveCalculationValueEntityService.getIncentiveCalculationValue(id);
	}

	async deleteIncentiveCalculationValue(id: number) {
		return this.incentiveCalculationValueEntityService.deleteIncentiveCalculationValue(id);
	}
}