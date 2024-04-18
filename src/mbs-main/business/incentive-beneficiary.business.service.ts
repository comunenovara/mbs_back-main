import { Injectable } from "@nestjs/common";
import { IncentiveBeneficiaryDto } from "../dto/incentive-beneficiary.dto";
import { IncentiveBeneficiaryEntityService } from "../entity/incentive-beneficiary.entity.service";

@Injectable({})
export class IncentiveBeneficiaryBusinessService {
	constructor(
		private incentiveBeneficiaryEntityService: IncentiveBeneficiaryEntityService,
	) {}

	async createIncentiveBeneficiary(incentiveBeneficiaryDto: IncentiveBeneficiaryDto) {
		return this.incentiveBeneficiaryEntityService.insertIncentiveBeneficiary(incentiveBeneficiaryDto);
	}

	async editIncentiveBeneficiary(incentiveBeneficiaryDto: IncentiveBeneficiaryDto) {
		return this.incentiveBeneficiaryEntityService.updateIncentiveBeneficiary(incentiveBeneficiaryDto);
	}

	async searchIncentiveBeneficiaries(filters: any): Promise<IncentiveBeneficiaryDto[]> {
		return this.incentiveBeneficiaryEntityService.getIncentiveBeneficiaries(filters);
	}

	async countIncentiveBeneficiaries(filters: any): Promise<number> {
		return this.incentiveBeneficiaryEntityService.countIncentiveBeneficiaries(filters);
	}

	async getIncentiveBeneficiary(id: number): Promise<IncentiveBeneficiaryDto> {
		return this.incentiveBeneficiaryEntityService.getIncentiveBeneficiary(id);
	}

	async deleteIncentiveBeneficiary(id: number) {
		return this.incentiveBeneficiaryEntityService.deleteIncentiveBeneficiary(id);
	}
}