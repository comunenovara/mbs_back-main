import { Injectable } from "@nestjs/common";
import { IncentiveCalculationFactorDto } from "../dto/incentive-calculation-factor.dto";
import { IncentiveCalculationFactorEntityService } from "../entity/incentive-calculation-factor.entity.service";

@Injectable({})
export class IncentiveCalculationFactorBusinessService {
	constructor(
		private incentiveCalculationFactorEntityService: IncentiveCalculationFactorEntityService,
	) {}

	async createIncentiveCalculationFactor(incentiveCalculationFactorDto: IncentiveCalculationFactorDto) {
		return this.incentiveCalculationFactorEntityService.insertIncentiveCalculationFactor(incentiveCalculationFactorDto);
	}

	async editIncentiveCalculationFactor(incentiveCalculationFactorDto: IncentiveCalculationFactorDto) {
		return this.incentiveCalculationFactorEntityService.updateIncentiveCalculationFactor(incentiveCalculationFactorDto);
	}

	async searchIncentiveCalculationFactors(filters: any): Promise<IncentiveCalculationFactorDto[]> {
		return this.incentiveCalculationFactorEntityService.getIncentiveCalculationFactors(filters);
	}

	async countIncentiveCalculationFactors(filters: any): Promise<number> {
		return this.incentiveCalculationFactorEntityService.countIncentiveCalculationFactors(filters);
	}

	async getIncentiveCalculationFactor(id: number): Promise<IncentiveCalculationFactorDto> {
		return this.incentiveCalculationFactorEntityService.getIncentiveCalculationFactor(id);
	}

	async deleteIncentiveCalculationFactor(id: number) {
		return this.incentiveCalculationFactorEntityService.deleteIncentiveCalculationFactor(id);
	}
}