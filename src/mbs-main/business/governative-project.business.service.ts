import { Injectable } from "@nestjs/common";
import { GovernativeProjectDto } from "../dto/governative-project.dto";
import { GovernativeProjectEntityService } from "../entity/governative-project.entity.service";

@Injectable({})
export class GovernativeProjectBusinessService {
	constructor(
		private governativeProjectEntityService: GovernativeProjectEntityService,
	) {}

	async createGovernativeProject(governativeProjectDto: GovernativeProjectDto) {
		return this.governativeProjectEntityService.insertGovernativeProject(governativeProjectDto);
	}

	async editGovernativeProject(governativeProjectDto: GovernativeProjectDto) {
		return this.governativeProjectEntityService.updateGovernativeProject(governativeProjectDto);
	}

	async searchGovernativeProjects(filters: any): Promise<GovernativeProjectDto[]> {
		return this.governativeProjectEntityService.getGovernativeProjects(filters);
	}

	async countGovernativeProjects(filters: any): Promise<number> {
		return this.governativeProjectEntityService.countGovernativeProjects(filters);
	}

	async getGovernativeProject(id: number): Promise<GovernativeProjectDto> {
		return this.governativeProjectEntityService.getGovernativeProject(id);
	}

	async deleteGovernativeProject(id: number) {
		return this.governativeProjectEntityService.deleteGovernativeProject(id);
	}
}