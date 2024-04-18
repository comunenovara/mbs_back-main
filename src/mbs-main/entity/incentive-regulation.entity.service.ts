import { Injectable } from "@nestjs/common";
import { IncentiveRegulationDto } from "../dto/incentive-regulation.dto";
import { PrismaService } from "../repository/prisma.service";
import { QueryParamsTools } from "src/tools/query-params.class";

@Injectable({})
export class IncentiveRegulationEntityService {
	constructor(
		private prisma: PrismaService,
	) {}

	async insertIncentiveRegulation(incentiveRegulationDto: IncentiveRegulationDto) {
		let prismaRequestArgs: any = {};
		// Fileds
		prismaRequestArgs['data'] = {
			description: incentiveRegulationDto.description,
		};
		// Relations
		return await this.prisma.incentiveRegulation.create(prismaRequestArgs);
	}

	async updateIncentiveRegulation(incentiveRegulationDto: IncentiveRegulationDto) {
		return await this.prisma.incentiveRegulation.update({
			where: {
				id: incentiveRegulationDto.id,
			},
			data: {
				description: incentiveRegulationDto.description,
			},
		});
	}

	// Get
	async getIncentiveRegulations(filters: any): Promise<IncentiveRegulationDto[]> {
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
		return await this.prisma.incentiveRegulation.findMany(prismaRequestArgs);
	}

	// Count
	async countIncentiveRegulations(filters: any): Promise<number> {
		let prismaRequestArgs: any = {};
		// Filter
		{
			prismaRequestArgs['where'] = QueryParamsTools.getPrismaWhereObject(filters);
		}
		return await this.prisma.incentiveRegulation.count(prismaRequestArgs);
	}

	async getIncentiveRegulation(id: number): Promise<IncentiveRegulationDto> {
		return await this.prisma.incentiveRegulation.findUnique({
			where: {
				id: id,
			},
		})
	}

	async deleteIncentiveRegulation(id: number) {
		return await this.prisma.incentiveRegulation.delete({
			where: {
				id: id,
			}
		});
	}
}