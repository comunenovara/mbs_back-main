import { Injectable } from "@nestjs/common";
import { GovernativeProjectProcurementLotDto } from "../dto/governative-project-procurement-lot.dto";
import { GovernativeProjectProcurementLotEntityService } from "../entity/governative-project-procurement-lot.entity.service";

@Injectable({})
export class GovernativeProjectProcurementLotBusinessService {
	constructor(
		private governativeProjectProcurementLotEntityService: GovernativeProjectProcurementLotEntityService,
	) {}

	async createGovernativeProjectProcurementLot(governativeProjectProcurementLotDto: GovernativeProjectProcurementLotDto) {
		return this.governativeProjectProcurementLotEntityService.insertGovernativeProjectProcurementLot(governativeProjectProcurementLotDto);
	}

	async editGovernativeProjectProcurementLot(governativeProjectProcurementLotDto: GovernativeProjectProcurementLotDto) {
		return this.governativeProjectProcurementLotEntityService.updateGovernativeProjectProcurementLot(governativeProjectProcurementLotDto);
	}

	async searchGovernativeProjectProcurementLots(filters: any): Promise<GovernativeProjectProcurementLotDto[]> {
		return this.governativeProjectProcurementLotEntityService.getGovernativeProjectProcurementLots(filters);
	}

	async countGovernativeProjectProcurementLots(filters: any): Promise<number> {
		return this.governativeProjectProcurementLotEntityService.countGovernativeProjectProcurementLots(filters);
	}

	async getGovernativeProjectProcurementLot(id: number): Promise<GovernativeProjectProcurementLotDto> {
		return this.governativeProjectProcurementLotEntityService.getGovernativeProjectProcurementLot(id);
	}

	async deleteGovernativeProjectProcurementLot(id: number) {
		return this.governativeProjectProcurementLotEntityService.deleteGovernativeProjectProcurementLot(id);
	}
}