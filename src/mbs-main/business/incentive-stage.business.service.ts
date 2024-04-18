import { Injectable } from "@nestjs/common";
import { IncentiveStageDto } from "../dto/incentive-stage.dto";
import { IncentiveStageEntityService } from "../entity/incentive-stage.entity.service";

@Injectable({})
export class IncentiveStageBusinessService {
	constructor(
		private incentiveStageEntityService: IncentiveStageEntityService,
	) {}

	async createIncentiveStage(incentiveStageDto: IncentiveStageDto) {
		return this.incentiveStageEntityService.insertIncentiveStage(incentiveStageDto);
	}

	async editIncentiveStage(incentiveStageDto: IncentiveStageDto) {
		return this.incentiveStageEntityService.updateIncentiveStage(incentiveStageDto);
	}

	async searchIncentiveStages(filters: any): Promise<IncentiveStageDto[]> {
		return this.incentiveStageEntityService.getIncentiveStages(filters);
	}

	async countIncentiveStages(filters: any): Promise<number> {
		return this.incentiveStageEntityService.countIncentiveStages(filters);
	}

	async getIncentiveStage(id: number): Promise<IncentiveStageDto> {
		return this.incentiveStageEntityService.getIncentiveStage(id);
	}

	async deleteIncentiveStage(id: number) {
		return this.incentiveStageEntityService.deleteIncentiveStage(id);
	}
}