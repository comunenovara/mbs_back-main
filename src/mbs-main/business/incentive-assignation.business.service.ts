import { Injectable } from "@nestjs/common";
import { IncentiveAssignationDto } from "../dto/incentive-assignation.dto";
import { IncentiveAssignationEntityService } from "../entity/incentive-assignation.entity.service";

@Injectable({})
export class IncentiveAssignationBusinessService {
	constructor(
		private incentiveAssignationEntityService: IncentiveAssignationEntityService,
	) {}

	async createIncentiveAssignation(incentiveAssignationDto: IncentiveAssignationDto) {
		return this.incentiveAssignationEntityService.insertIncentiveAssignation(incentiveAssignationDto);
	}

	async editIncentiveAssignation(incentiveAssignationDto: IncentiveAssignationDto) {
		return this.incentiveAssignationEntityService.updateIncentiveAssignation(incentiveAssignationDto);
	}

	async searchIncentiveAssignations(filters: any): Promise<IncentiveAssignationDto[]> {
		return this.incentiveAssignationEntityService.getIncentiveAssignations(filters);
	}

	async countIncentiveAssignations(filters: any): Promise<number> {
		return this.incentiveAssignationEntityService.countIncentiveAssignations(filters);
	}

	async getIncentiveAssignation(id: number): Promise<IncentiveAssignationDto> {
		return this.incentiveAssignationEntityService.getIncentiveAssignation(id);
	}

	async deleteIncentiveAssignation(id: number) {
		return this.incentiveAssignationEntityService.deleteIncentiveAssignation(id);
	}
}