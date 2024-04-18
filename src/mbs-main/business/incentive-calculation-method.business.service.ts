import { Injectable } from "@nestjs/common";
import { IncentiveCalculationMethodDto } from "../dto/incentive-calculation-method.dto";
import { IncentiveCalculationMethodEntityService } from "../entity/incentive-calculation-method.entity.service";

@Injectable({})
export class IncentiveCalculationMethodBusinessService {
	constructor(
		private incentiveCalculationMethodEntityService: IncentiveCalculationMethodEntityService,
	) {}

	async createIncentiveCalculationMethod(incentiveCalculationMethodDto: IncentiveCalculationMethodDto) {
		return this.incentiveCalculationMethodEntityService.insertIncentiveCalculationMethod(incentiveCalculationMethodDto);
	}

	async editIncentiveCalculationMethod(incentiveCalculationMethodDto: IncentiveCalculationMethodDto) {
		return this.incentiveCalculationMethodEntityService.updateIncentiveCalculationMethod(incentiveCalculationMethodDto);
	}

	async searchIncentiveCalculationMethods(filters: any): Promise<IncentiveCalculationMethodDto[]> {
		return this.incentiveCalculationMethodEntityService.getIncentiveCalculationMethods(filters);
	}

	async countIncentiveCalculationMethods(filters: any): Promise<number> {
		return this.incentiveCalculationMethodEntityService.countIncentiveCalculationMethods(filters);
	}

	async getIncentiveCalculationMethod(id: number): Promise<IncentiveCalculationMethodDto> {
		return this.incentiveCalculationMethodEntityService.getIncentiveCalculationMethod(id);
	}

	async deleteIncentiveCalculationMethod(id: number) {
		return this.incentiveCalculationMethodEntityService.deleteIncentiveCalculationMethod(id);
	}
}