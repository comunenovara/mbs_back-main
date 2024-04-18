import { Injectable } from "@nestjs/common";
import { ProcurementTypeDto } from "../dto/procurement-type.dto";
import { PrismaService } from "../repository/prisma.service";
import { QueryParamsTools } from "src/tools/query-params.class";

@Injectable({})
export class ProcurementTypeEntityService {
	constructor(
		private prisma: PrismaService,
	) {}

	async insertProcurementType(procurementTypeDto: ProcurementTypeDto) {
		let prismaRequestArgs: any = {};
		// Fileds
		prismaRequestArgs['data'] = {
			description: procurementTypeDto.description,
		};
		// Relations
		return await this.prisma.procurementType.create(prismaRequestArgs);
	}

	async updateProcurementType(procurementTypeDto: ProcurementTypeDto) {
		return await this.prisma.procurementType.update({
			where: {
				id: procurementTypeDto.id,
			},
			data: {
				description: procurementTypeDto.description,
			},
		});
	}

	// Get
	async getProcurementTypes(filters: any): Promise<ProcurementTypeDto[]> {
		let prismaRequestArgs: any = {};
		// Pagination
		if(filters.size !== undefined && filters.page !== undefined) {
			prismaRequestArgs = { ...QueryParamsTools.getPrismaPaginationObject(filters) };
		}
		// Filter
		{
			prismaRequestArgs['where'] = QueryParamsTools.getPrismaWhereObject(filters);
		}
		// Join
		{
		}
		// Order
		if(filters.orderBy !== undefined) {
			prismaRequestArgs['orderBy'] = QueryParamsTools.getPrismaOrderByArray(filters);
		}
		return await this.prisma.procurementType.findMany(prismaRequestArgs);
	}

	// Count
	async countProcurementTypes(filters: any): Promise<number> {
		let prismaRequestArgs: any = {};
		// Filter
		{
			prismaRequestArgs['where'] = QueryParamsTools.getPrismaWhereObject(filters);
		}
		return await this.prisma.procurementType.count(prismaRequestArgs);
	}

	async getProcurementType(id: number): Promise<ProcurementTypeDto> {
		return await this.prisma.procurementType.findUnique({
			where: {
				id: id,
			},
		})
	}

	async deleteProcurementType(id: number) {
		return await this.prisma.procurementType.delete({
			where: {
				id: id,
			}
		});
	}
}