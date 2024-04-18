import { Injectable } from "@nestjs/common";
import { GovernativeProcurementLotDto } from "../dto/governative-procurement-lot.dto";
import { PrismaService } from "../repository/prisma.service";
import { QueryParamsTools } from "../tools/query-params.class";

@Injectable({})
export class GovernativeProcurementLotEntityService {
	constructor(
		private prisma: PrismaService,
	) {}

	async insertGovernativeProcurementLot(governativeProcurementLotDto: GovernativeProcurementLotDto) {
		let prismaRequestArgs: any = {};
		// Fileds
		prismaRequestArgs['data'] = {
			code: governativeProcurementLotDto.code,
			description: governativeProcurementLotDto.description,
			amount: governativeProcurementLotDto.amount,
		};
		// Relations
		if(governativeProcurementLotDto.procurementTypeId != null) {
			prismaRequestArgs['data']['procurementType'] = {
				connect: {
					id: governativeProcurementLotDto.procurementTypeId
				}
			};
		}
		return await this.prisma.governativeProcurementLot.create(prismaRequestArgs);
	}

	async updateGovernativeProcurementLot(governativeProcurementLotDto: GovernativeProcurementLotDto) {
		return await this.prisma.governativeProcurementLot.update({
			where: {
				id: governativeProcurementLotDto.id,
			},
			data: {
				procurementTypeId: governativeProcurementLotDto.procurementTypeId,
				code: governativeProcurementLotDto.code,
				description: governativeProcurementLotDto.description,
				amount: governativeProcurementLotDto.amount,
			},
		});
	}

	// Get
	async getGovernativeProcurementLots(filters: any): Promise<GovernativeProcurementLotDto[]> {
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
				procurementType: true,
			};
		}
		// Order
		if(filters.orderBy !== undefined) {
			prismaRequestArgs['orderBy'] = QueryParamsTools.getPrismaOrderByArray(filters);
		}
		return await this.prisma.governativeProcurementLot.findMany(prismaRequestArgs);
	}

	// Count
	async countGovernativeProcurementLots(filters: any): Promise<number> {
		let prismaRequestArgs: any = {};
		// Filter
		{
			prismaRequestArgs['where'] = QueryParamsTools.getPrismaWhereObject(filters);
		}
		return await this.prisma.governativeProcurementLot.count(prismaRequestArgs);
	}

	async getGovernativeProcurementLot(id: number): Promise<GovernativeProcurementLotDto> {
		return await this.prisma.governativeProcurementLot.findUnique({
			where: {
				id: id,
			},
			include: {
				procurementType: true,
			},
		})
	}

	async deleteGovernativeProcurementLot(id: number) {
		return await this.prisma.governativeProcurementLot.delete({
			where: {
				id: id,
			}
		});
	}
}