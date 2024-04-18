import { Injectable } from "@nestjs/common";
import { IncentiveStageDto } from "../dto/incentive-stage.dto";
import { PrismaService } from "../repository/prisma.service";
import { QueryParamsTools } from "src/tools/query-params.class";

@Injectable({})
export class IncentiveStageEntityService {
	constructor(
		private prisma: PrismaService,
	) {}

	async insertIncentiveStage(incentiveStageDto: IncentiveStageDto) {
		let prismaRequestArgs: any = {};
		// Fileds
		prismaRequestArgs['data'] = {
			description: incentiveStageDto.description,
		};
		// Relations
		if(incentiveStageDto.procurementTypeId != null) {
			prismaRequestArgs['data']['procurementType'] = {
				connect: {
					id: incentiveStageDto.procurementTypeId
				}
			};
		}
		if(incentiveStageDto.regulationId != null) {
			prismaRequestArgs['data']['regulation'] = {
				connect: {
					id: incentiveStageDto.regulationId
				}
			};
		}
		return await this.prisma.incentiveStage.create(prismaRequestArgs);
	}

	async updateIncentiveStage(incentiveStageDto: IncentiveStageDto) {
		return await this.prisma.incentiveStage.update({
			where: {
				id: incentiveStageDto.id,
			},
			data: {
				procurementTypeId: incentiveStageDto.procurementTypeId,
				regulationId: incentiveStageDto.regulationId,
				description: incentiveStageDto.description,
			},
		});
	}

	// Get
	async getIncentiveStages(filters: any): Promise<IncentiveStageDto[]> {
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
		return await this.prisma.incentiveStage.findMany(prismaRequestArgs);
	}

	// Count
	async countIncentiveStages(filters: any): Promise<number> {
		let prismaRequestArgs: any = {};
		// Filter
		{
			prismaRequestArgs['where'] = QueryParamsTools.getPrismaWhereObject(filters);
		}
		return await this.prisma.incentiveStage.count(prismaRequestArgs);
	}

	async getIncentiveStage(id: number): Promise<IncentiveStageDto> {
		return await this.prisma.incentiveStage.findUnique({
			where: {
				id: id,
			},
			include: {
				procurementType: true,
				regulation: true,
			},
		})
	}

	async deleteIncentiveStage(id: number) {
		return await this.prisma.incentiveStage.delete({
			where: {
				id: id,
			}
		});
	}
}