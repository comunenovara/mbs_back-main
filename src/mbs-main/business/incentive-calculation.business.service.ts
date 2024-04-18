import { Injectable } from "@nestjs/common";
import { IncentiveCalculationDto } from "../dto/incentive-calculation.dto";
import { IncentiveCalculationEntityService } from "../entity/incentive-calculation.entity.service";

@Injectable({})
export class IncentiveCalculationBusinessService {
	constructor(
		private incentiveCalculationEntityService: IncentiveCalculationEntityService,
	) {}

	async createIncentiveCalculation(incentiveCalculationDto: IncentiveCalculationDto) {
		return this.incentiveCalculationEntityService.insertIncentiveCalculation(incentiveCalculationDto);
	}

	async editIncentiveCalculation(incentiveCalculationDto: IncentiveCalculationDto) {
		return this.incentiveCalculationEntityService.updateIncentiveCalculation(incentiveCalculationDto);
	}

	async searchIncentiveCalculations(filters: any): Promise<IncentiveCalculationDto[]> {
		return this.incentiveCalculationEntityService.getIncentiveCalculations(filters);
	}

	async countIncentiveCalculations(filters: any): Promise<number> {
		return this.incentiveCalculationEntityService.countIncentiveCalculations(filters);
	}

	async getIncentiveCalculation(id: number): Promise<IncentiveCalculationDto> {
		return this.incentiveCalculationEntityService.getIncentiveCalculation(id);
	}

	async deleteIncentiveCalculation(id: number) {
		return this.incentiveCalculationEntityService.deleteIncentiveCalculation(id);
	}
}