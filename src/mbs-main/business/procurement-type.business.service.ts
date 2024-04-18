import { Injectable } from "@nestjs/common";
import { ProcurementTypeDto } from "../dto/procurement-type.dto";
import { ProcurementTypeEntityService } from "../entity/procurement-type.entity.service";

@Injectable({})
export class ProcurementTypeBusinessService {
	constructor(
		private procurementTypeEntityService: ProcurementTypeEntityService,
	) {}

	async createProcurementType(procurementTypeDto: ProcurementTypeDto) {
		return this.procurementTypeEntityService.insertProcurementType(procurementTypeDto);
	}

	async editProcurementType(procurementTypeDto: ProcurementTypeDto) {
		return this.procurementTypeEntityService.updateProcurementType(procurementTypeDto);
	}

	async searchProcurementTypes(filters: any): Promise<ProcurementTypeDto[]> {
		return this.procurementTypeEntityService.getProcurementTypes(filters);
	}

	async countProcurementTypes(filters: any): Promise<number> {
		return this.procurementTypeEntityService.countProcurementTypes(filters);
	}

	async getProcurementType(id: number): Promise<ProcurementTypeDto> {
		return this.procurementTypeEntityService.getProcurementType(id);
	}

	async deleteProcurementType(id: number) {
		return this.procurementTypeEntityService.deleteProcurementType(id);
	}
}