import { Injectable } from "@nestjs/common";
import { IncentiveWithheldDto } from "../dto/incentive-withheld.dto";
import { PrismaService } from "../repository/prisma.service";
import { QueryParamsTools } from "../tools/query-params.class";

@Injectable({})
export class IncentiveWithheldEntityService {
	constructor(
		private prisma: PrismaService,
	) {}

	async insertIncentiveWithheld(incentiveWithheldDto: IncentiveWithheldDto) {
		let prismaRequestArgs: any = {};
		// Fileds
		prismaRequestArgs['data'] = {
			description: incentiveWithheldDto.description,
			active: incentiveWithheldDto.active,
			amount: incentiveWithheldDto.amount,
			percentage: incentiveWithheldDto.percentage,
		};
		// Relations
		if(incentiveWithheldDto.procurementTypeId != null) {
			prismaRequestArgs['data']['procurementType'] = {
				connect: {
					id: incentiveWithheldDto.procurementTypeId
				}
			};
		}
		if(incentiveWithheldDto.regulationId != null) {
			prismaRequestArgs['data']['regulation'] = {
				connect: {
					id: incentiveWithheldDto.regulationId
				}
			};
		}
		return await this.prisma.incentiveWithheld.create(prismaRequestArgs);
	}

	async updateIncentiveWithheld(incentiveWithheldDto: IncentiveWithheldDto) {
		return await this.prisma.incentiveWithheld.update({
			where: {
				id: incentiveWithheldDto.id,
			},
			data: {
				procurementTypeId: incentiveWithheldDto.procurementTypeId,
				regulationId: incentiveWithheldDto.regulationId,
				description: incentiveWithheldDto.description,
				active: incentiveWithheldDto.active,
				amount: incentiveWithheldDto.amount,
				percentage: incentiveWithheldDto.percentage,
			},
		});
	}

	// Get
	async getIncentiveWithhelds(filters: any): Promise<IncentiveWithheldDto[]> {
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
				regulation: true,
			};
		}
		// Order
		if(filters.orderBy !== undefined) {
			prismaRequestArgs['orderBy'] = QueryParamsTools.getPrismaOrderByArray(filters);
		}
		return await this.prisma.incentiveWithheld.findMany(prismaRequestArgs);
	}

	// Count
	async countIncentiveWithhelds(filters: any): Promise<number> {
		let prismaRequestArgs: any = {};
		// Filter
		{
			prismaRequestArgs['where'] = QueryParamsTools.getPrismaWhereObject(filters);
		}
		return await this.prisma.incentiveWithheld.count(prismaRequestArgs);
	}

	async getIncentiveWithheld(id: number): Promise<IncentiveWithheldDto> {
		return await this.prisma.incentiveWithheld.findUnique({
			where: {
				id: id,
			},
			include: {
				procurementType: true,
				regulation: true,
			},
		})
	}

	async deleteIncentiveWithheld(id: number) {
		return await this.prisma.incentiveWithheld.delete({
			where: {
				id: id,
			}
		});
	}
}