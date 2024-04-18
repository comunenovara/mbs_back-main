import { Injectable } from "@nestjs/common";
import { IncentiveCalculationFactorDto } from "../dto/incentive-calculation-factor.dto";
import { PrismaService } from "../repository/prisma.service";
import { QueryParamsTools } from "../tools/query-params.class";

@Injectable({})
export class IncentiveCalculationFactorEntityService {
	constructor(
		private prisma: PrismaService,
	) {}

	async insertIncentiveCalculationFactor(incentiveCalculationFactorDto: IncentiveCalculationFactorDto) {
		let prismaRequestArgs: any = {};
		// Fileds
		prismaRequestArgs['data'] = {
			minval: incentiveCalculationFactorDto.minval,
			maxval: incentiveCalculationFactorDto.maxval,
			defaultval: incentiveCalculationFactorDto.defaultval,
		};
		// Relations
		if(incentiveCalculationFactorDto.incentiveCalculationMethodId != null) {
			prismaRequestArgs['data']['incentiveCalculationMethod'] = {
				connect: {
					id: incentiveCalculationFactorDto.incentiveCalculationMethodId
				}
			};
		}
		return await this.prisma.incentiveCalculationFactor.create(prismaRequestArgs);
	}

	async updateIncentiveCalculationFactor(incentiveCalculationFactorDto: IncentiveCalculationFactorDto) {
		return await this.prisma.incentiveCalculationFactor.update({
			where: {
				id: incentiveCalculationFactorDto.id,
			},
			data: {
				incentiveCalculationMethodId: incentiveCalculationFactorDto.incentiveCalculationMethodId,
				minval: incentiveCalculationFactorDto.minval,
				maxval: incentiveCalculationFactorDto.maxval,
				defaultval: incentiveCalculationFactorDto.defaultval,
			},
		});
	}

	// Get
	async getIncentiveCalculationFactors(filters: any): Promise<IncentiveCalculationFactorDto[]> {
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
				incentiveCalculationMethod: true,
			};
		}
		// Order
		if(filters.orderBy !== undefined) {
			prismaRequestArgs['orderBy'] = QueryParamsTools.getPrismaOrderByArray(filters);
		}
		return await this.prisma.incentiveCalculationFactor.findMany(prismaRequestArgs);
	}

	// Count
	async countIncentiveCalculationFactors(filters: any): Promise<number> {
		let prismaRequestArgs: any = {};
		// Filter
		{
			prismaRequestArgs['where'] = QueryParamsTools.getPrismaWhereObject(filters);
		}
		return await this.prisma.incentiveCalculationFactor.count(prismaRequestArgs);
	}

	async getIncentiveCalculationFactor(id: number): Promise<IncentiveCalculationFactorDto> {
		return await this.prisma.incentiveCalculationFactor.findUnique({
			where: {
				id: id,
			},
			include: {
				incentiveCalculationMethod: true,
			},
		})
	}

	async deleteIncentiveCalculationFactor(id: number) {
		return await this.prisma.incentiveCalculationFactor.delete({
			where: {
				id: id,
			}
		});
	}
}