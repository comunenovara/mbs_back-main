import { Injectable } from "@nestjs/common";
import { IncentiveCalculationValueDto } from "../dto/incentive-calculation-value.dto";
import { PrismaService } from "../repository/prisma.service";
import { QueryParamsTools } from "../tools/query-params.class";

@Injectable({})
export class IncentiveCalculationValueEntityService {
	constructor(
		private prisma: PrismaService,
	) {}

	async insertIncentiveCalculationValue(incentiveCalculationValueDto: IncentiveCalculationValueDto) {
		let prismaRequestArgs: any = {};
		// Fileds
		prismaRequestArgs['data'] = {
			value: incentiveCalculationValueDto.value,
		};
		// Relations
		if(incentiveCalculationValueDto.calculationId != null) {
			prismaRequestArgs['data']['calculation'] = {
				connect: {
					id: incentiveCalculationValueDto.calculationId
				}
			};
		}
		if(incentiveCalculationValueDto.regulationValueId != null) {
			prismaRequestArgs['data']['regulationValue'] = {
				connect: {
					id: incentiveCalculationValueDto.regulationValueId
				}
			};
		}
		return await this.prisma.incentiveCalculationValue.create(prismaRequestArgs);
	}

	async updateIncentiveCalculationValue(incentiveCalculationValueDto: IncentiveCalculationValueDto) {
		return await this.prisma.incentiveCalculationValue.update({
			where: {
				id: incentiveCalculationValueDto.id,
			},
			data: {
				calculationId: incentiveCalculationValueDto.calculationId,
				regulationValueId: incentiveCalculationValueDto.regulationValueId,
				value: incentiveCalculationValueDto.value,
			},
		});
	}

	// Get
	async getIncentiveCalculationValues(filters: any): Promise<IncentiveCalculationValueDto[]> {
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
				calculation: true,
				regulationValue: true,
			};
		}
		// Order
		if(filters.orderBy !== undefined) {
			prismaRequestArgs['orderBy'] = QueryParamsTools.getPrismaOrderByArray(filters);
		}
		return await this.prisma.incentiveCalculationValue.findMany(prismaRequestArgs);
	}

	// Count
	async countIncentiveCalculationValues(filters: any): Promise<number> {
		let prismaRequestArgs: any = {};
		// Filter
		{
			prismaRequestArgs['where'] = QueryParamsTools.getPrismaWhereObject(filters);
		}
		return await this.prisma.incentiveCalculationValue.count(prismaRequestArgs);
	}

	async getIncentiveCalculationValue(id: number): Promise<IncentiveCalculationValueDto> {
		return await this.prisma.incentiveCalculationValue.findUnique({
			where: {
				id: id,
			},
			include: {
				calculation: true,
				regulationValue: true,
			},
		})
	}

	async deleteIncentiveCalculationValue(id: number) {
		return await this.prisma.incentiveCalculationValue.delete({
			where: {
				id: id,
			}
		});
	}
}