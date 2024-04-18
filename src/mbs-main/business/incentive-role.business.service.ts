import { Injectable } from "@nestjs/common";
import { IncentiveRoleDto } from "../dto/incentive-role.dto";
import { IncentiveRoleEntityService } from "../entity/incentive-role.entity.service";

@Injectable({})
export class IncentiveRoleBusinessService {
	constructor(
		private incentiveRoleEntityService: IncentiveRoleEntityService,
	) {}

	async createIncentiveRole(incentiveRoleDto: IncentiveRoleDto) {
		return this.incentiveRoleEntityService.insertIncentiveRole(incentiveRoleDto);
	}

	async editIncentiveRole(incentiveRoleDto: IncentiveRoleDto) {
		return this.incentiveRoleEntityService.updateIncentiveRole(incentiveRoleDto);
	}

	async searchIncentiveRoles(filters: any): Promise<IncentiveRoleDto[]> {
		return this.incentiveRoleEntityService.getIncentiveRoles(filters);
	}

	async countIncentiveRoles(filters: any): Promise<number> {
		return this.incentiveRoleEntityService.countIncentiveRoles(filters);
	}

	async getIncentiveRole(id: number): Promise<IncentiveRoleDto> {
		return this.incentiveRoleEntityService.getIncentiveRole(id);
	}

	async deleteIncentiveRole(id: number) {
		return this.incentiveRoleEntityService.deleteIncentiveRole(id);
	}
}