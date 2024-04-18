import { Injectable } from "@nestjs/common";
import { IncentiveCalculationMethodDto } from "../dto/incentive-calculation-method.dto";
import { PrismaService } from "../repository/prisma.service";
import { QueryParamsTools } from "../tools/query-params.class";

@Injectable({})
export class IncentiveCalculationMethodEntityService {
	constructor(
		private prisma: PrismaService,
	) {}

	async insertIncentiveCalculationMethod(incentiveCalculationMethodDto: IncentiveCalculationMethodDto) {
		let prismaRequestArgs: any = {};
		// Fileds
		prismaRequestArgs['data'] = {
			description: incentiveCalculationMethodDto.description,
			code: incentiveCalculationMethodDto.code,
		};
		// Relations
		if(incentiveCalculationMethodDto.procurementTypeId != null) {
			prismaRequestArgs['data']['procurementType'] = {
				connect: {
					id: incentiveCalculationMethodDto.procurementTypeId
				}
			};
		}
		if(incentiveCalculationMethodDto.regulationId != null) {
			prismaRequestArgs['data']['regulation'] = {
				connect: {
					id: incentiveCalculationMethodDto.regulationId
				}
			};
		}
		return await this.prisma.incentiveCalculationMethod.create(prismaRequestArgs);
	}

	async updateIncentiveCalculationMethod(incentiveCalculationMethodDto: IncentiveCalculationMethodDto) {
		return await this.prisma.incentiveCalculationMethod.update({
			where: {
				id: incentiveCalculationMethodDto.id,
			},
			data: {
				procurementTypeId: incentiveCalculationMethodDto.procurementTypeId,
				regulationId: incentiveCalculationMethodDto.regulationId,
				description: incentiveCalculationMethodDto.description,
				code: incentiveCalculationMethodDto.code,
			},
		});
	}

	// Get
	async getIncentiveCalculationMethods(filters: any): Promise<IncentiveCalculationMethodDto[]> {
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
		return await this.prisma.incentiveCalculationMethod.findMany(prismaRequestArgs);
	}

	// Count
	async countIncentiveCalculationMethods(filters: any): Promise<number> {
		let prismaRequestArgs: any = {};
		// Filter
		{
			prismaRequestArgs['where'] = QueryParamsTools.getPrismaWhereObject(filters);
		}
		return await this.prisma.incentiveCalculationMethod.count(prismaRequestArgs);
	}

	async getIncentiveCalculationMethod(id: number): Promise<IncentiveCalculationMethodDto> {
		return await this.prisma.incentiveCalculationMethod.findUnique({
			where: {
				id: id,
			},
			include: {
				procurementType: true,
				regulation: true,
			},
		})
	}

	async deleteIncentiveCalculationMethod(id: number) {
		return await this.prisma.incentiveCalculationMethod.delete({
			where: {
				id: id,
			}
		});
	}
}