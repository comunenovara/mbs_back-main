import { Injectable } from "@nestjs/common";
import { ElaborateGroupDto } from "../dto/elaborate-group.dto";
import { ElaborateGroupEntityService } from "../entity/elaborate-group.entity.service";

@Injectable({})
export class ElaborateGroupBusinessService {
	constructor(
		private elaborateGroupEntityService: ElaborateGroupEntityService,
	) {}

	async createElaborateGroup(elaborateGroupDto: ElaborateGroupDto) {
		return this.elaborateGroupEntityService.insertElaborateGroup(elaborateGroupDto);
	}

	async editElaborateGroup(elaborateGroupDto: ElaborateGroupDto) {
		return this.elaborateGroupEntityService.updateElaborateGroup(elaborateGroupDto);
	}

	async searchElaborateGroups(filters: any): Promise<ElaborateGroupDto[]> {
		return this.elaborateGroupEntityService.getElaborateGroups(filters);
	}

	async countElaborateGroups(filters: any): Promise<number> {
		return this.elaborateGroupEntityService.countElaborateGroups(filters);
	}

	async getElaborateGroup(id: number): Promise<ElaborateGroupDto> {
		return this.elaborateGroupEntityService.getElaborateGroup(id);
	}

	async deleteElaborateGroup(id: number) {
		return this.elaborateGroupEntityService.deleteElaborateGroup(id);
	}
}