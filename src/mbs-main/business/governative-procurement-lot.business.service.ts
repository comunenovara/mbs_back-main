import { Injectable } from "@nestjs/common";
import { GovernativeProcurementLotDto } from "../dto/governative-procurement-lot.dto";
import { GovernativeProcurementLotEntityService } from "../entity/governative-procurement-lot.entity.service";

@Injectable({})
export class GovernativeProcurementLotBusinessService {
	constructor(
		private governativeProcurementLotEntityService: GovernativeProcurementLotEntityService,
	) {}

	async createGovernativeProcurementLot(governativeProcurementLotDto: GovernativeProcurementLotDto) {
		return this.governativeProcurementLotEntityService.insertGovernativeProcurementLot(governativeProcurementLotDto);
	}

	async editGovernativeProcurementLot(governativeProcurementLotDto: GovernativeProcurementLotDto) {
		return this.governativeProcurementLotEntityService.updateGovernativeProcurementLot(governativeProcurementLotDto);
	}

	async searchGovernativeProcurementLots(filters: any): Promise<GovernativeProcurementLotDto[]> {
		return this.governativeProcurementLotEntityService.getGovernativeProcurementLots(filters);
	}

	async countGovernativeProcurementLots(filters: any): Promise<number> {
		return this.governativeProcurementLotEntityService.countGovernativeProcurementLots(filters);
	}

	async getGovernativeProcurementLot(id: number): Promise<GovernativeProcurementLotDto> {
		return this.governativeProcurementLotEntityService.getGovernativeProcurementLot(id);
	}

	async deleteGovernativeProcurementLot(id: number) {
		return this.governativeProcurementLotEntityService.deleteGovernativeProcurementLot(id);
	}
}