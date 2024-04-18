import { Injectable } from "@nestjs/common";
import { GovernativeProjectProcurementLotDto } from "../dto/governative-project-procurement-lot.dto";
import { PrismaService } from "../repository/prisma.service";
import { QueryParamsTools } from "src/tools/query-params.class";

@Injectable({})
export class GovernativeProjectProcurementLotEntityService {
	constructor(
		private prisma: PrismaService,
	) {}

	async insertGovernativeProjectProcurementLot(governativeProjectProcurementLotDto: GovernativeProjectProcurementLotDto) {
		let prismaRequestArgs: any = {};
		// Fileds
		prismaRequestArgs['data'] = {
			amount: governativeProjectProcurementLotDto.amount,
		};
		// Relations
		if(governativeProjectProcurementLotDto.projectId != null) {
			prismaRequestArgs['data']['project'] = {
				connect: {
					id: governativeProjectProcurementLotDto.projectId
				}
			};
		}
		if(governativeProjectProcurementLotDto.procurementLotId != null) {
			prismaRequestArgs['data']['procurementLot'] = {
				connect: {
					id: governativeProjectProcurementLotDto.procurementLotId
				}
			};
		}
		return await this.prisma.governativeProjectProcurementLot.create(prismaRequestArgs);
	}

	async updateGovernativeProjectProcurementLot(governativeProjectProcurementLotDto: GovernativeProjectProcurementLotDto) {
		return await this.prisma.governativeProjectProcurementLot.update({
			where: {
				id: governativeProjectProcurementLotDto.id,
			},
			data: {
				projectId: governativeProjectProcurementLotDto.projectId,
				procurementLotId: governativeProjectProcurementLotDto.procurementLotId,
				amount: governativeProjectProcurementLotDto.amount,
			},
		});
	}

	// Get
	async getGovernativeProjectProcurementLots(filters: any): Promise<GovernativeProjectProcurementLotDto[]> {
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
			prismaRequestArgs['include'] = {
				project: true,
				procurementLot: true,
			};
		}
		// Order
		if(filters.orderBy !== undefined) {
			prismaRequestArgs['orderBy'] = QueryParamsTools.getPrismaOrderByArray(filters);
		}
		return await this.prisma.governativeProjectProcurementLot.findMany(prismaRequestArgs);
	}

	// Count
	async countGovernativeProjectProcurementLots(filters: any): Promise<number> {
		let prismaRequestArgs: any = {};
		// Filter
		{
			prismaRequestArgs['where'] = QueryParamsTools.getPrismaWhereObject(filters);
		}
		return await this.prisma.governativeProjectProcurementLot.count(prismaRequestArgs);
	}

	async getGovernativeProjectProcurementLot(id: number): Promise<GovernativeProjectProcurementLotDto> {
		return await this.prisma.governativeProjectProcurementLot.findUnique({
			where: {
				id: id,
			},
			include: {
				project: true,
				procurementLot: true,
			},
		})
	}

	async deleteGovernativeProjectProcurementLot(id: number) {
		return await this.prisma.governativeProjectProcurementLot.delete({
			where: {
				id: id,
			}
		});
	}
}