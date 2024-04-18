import { Injectable } from "@nestjs/common";
import { IncentiveRoleAssignationDto } from "../dto/incentive-role-assignation.dto";
import { IncentiveRoleAssignationEntityService } from "../entity/incentive-role-assignation.entity.service";

@Injectable({})
export class IncentiveRoleAssignationBusinessService {
	constructor(
		private incentiveRoleAssignationEntityService: IncentiveRoleAssignationEntityService,
	) {}

	async createIncentiveRoleAssignation(incentiveRoleAssignationDto: IncentiveRoleAssignationDto) {
		return this.incentiveRoleAssignationEntityService.insertIncentiveRoleAssignation(incentiveRoleAssignationDto);
	}

	async editIncentiveRoleAssignation(incentiveRoleAssignationDto: IncentiveRoleAssignationDto) {
		return this.incentiveRoleAssignationEntityService.updateIncentiveRoleAssignation(incentiveRoleAssignationDto);
	}

	async searchIncentiveRoleAssignations(filters: any): Promise<IncentiveRoleAssignationDto[]> {
		return this.incentiveRoleAssignationEntityService.getIncentiveRoleAssignations(filters);
	}

	async countIncentiveRoleAssignations(filters: any): Promise<number> {
		return this.incentiveRoleAssignationEntityService.countIncentiveRoleAssignations(filters);
	}

	async getIncentiveRoleAssignation(id: number): Promise<IncentiveRoleAssignationDto> {
		return this.incentiveRoleAssignationEntityService.getIncentiveRoleAssignation(id);
	}

	async deleteIncentiveRoleAssignation(id: number) {
		return this.incentiveRoleAssignationEntityService.deleteIncentiveRoleAssignation(id);
	}
}