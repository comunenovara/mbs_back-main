import { Injectable } from "@nestjs/common";
import { IncentiveCalculationDto } from "../dto/incentive-calculation.dto";
import { PrismaService } from "../repository/prisma.service";
import { QueryParamsTools } from "../tools/query-params.class";

@Injectable({})
export class IncentiveCalculationEntityService {
	constructor(
		private prisma: PrismaService,
	) {}

	async insertIncentiveCalculation(incentiveCalculationDto: IncentiveCalculationDto) {
		let prismaRequestArgs: any = {};
		// Fileds
		prismaRequestArgs['data'] = {
			description: incentiveCalculationDto.description,
			confirmed: incentiveCalculationDto.confirmed,
			preAmount: incentiveCalculationDto.preAmount,
			amount: incentiveCalculationDto.amount,
		};
		// Relations
		if(incentiveCalculationDto.governativeProcurementLotId != null) {
			prismaRequestArgs['data']['governativeProcurementLot'] = {
				connect: {
					id: incentiveCalculationDto.governativeProcurementLotId
				}
			};
		}
		if(incentiveCalculationDto.regulationId != null) {
			prismaRequestArgs['data']['regulation'] = {
				connect: {
					id: incentiveCalculationDto.regulationId
				}
			};
		}
		return await this.prisma.incentiveCalculation.create(prismaRequestArgs);
	}

	async updateIncentiveCalculation(incentiveCalculationDto: IncentiveCalculationDto) {
		return await this.prisma.incentiveCalculation.update({
			where: {
				id: incentiveCalculationDto.id,
			},
			data: {
				governativeProcurementLotId: incentiveCalculationDto.governativeProcurementLotId,
				regulationId: incentiveCalculationDto.regulationId,
				description: incentiveCalculationDto.description,
				confirmed: incentiveCalculationDto.confirmed,
				preAmount: incentiveCalculationDto.preAmount,
				amount: incentiveCalculationDto.amount,
			},
		});
	}

	// Get
	async getIncentiveCalculations(filters: any): Promise<IncentiveCalculationDto[]> {
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
				governativeProcurementLot: true,
				regulation: true,
			};
		}
		// Order
		if(filters.orderBy !== undefined) {
			prismaRequestArgs['orderBy'] = QueryParamsTools.getPrismaOrderByArray(filters);
		}
		return await this.prisma.incentiveCalculation.findMany(prismaRequestArgs);
	}

	// Count
	async countIncentiveCalculations(filters: any): Promise<number> {
		let prismaRequestArgs: any = {};
		// Filter
		{
			prismaRequestArgs['where'] = QueryParamsTools.getPrismaWhereObject(filters);
		}
		return await this.prisma.incentiveCalculation.count(prismaRequestArgs);
	}

	async getIncentiveCalculation(id: number): Promise<IncentiveCalculationDto> {
		return await this.prisma.incentiveCalculation.findUnique({
			where: {
				id: id,
			},
			include: {
				governativeProcurementLot: true,
				regulation: true,
			},
		})
	}

	async deleteIncentiveCalculation(id: number) {
		return await this.prisma.incentiveCalculation.delete({
			where: {
				id: id,
			}
		});
	}
}