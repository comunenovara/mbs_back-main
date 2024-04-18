import { Injectable } from "@nestjs/common";
import { IncentiveRegulationValueDto } from "../dto/incentive-regulation-value.dto";
import { PrismaService } from "../repository/prisma.service";
import { QueryParamsTools } from "../tools/query-params.class";

@Injectable({})
export class IncentiveRegulationValueEntityService {
	constructor(
		private prisma: PrismaService,
	) {}

	async insertIncentiveRegulationValue(incentiveRegulationValueDto: IncentiveRegulationValueDto) {
		let prismaRequestArgs: any = {};
		// Fileds
		prismaRequestArgs['data'] = {
			minval: incentiveRegulationValueDto.minval,
			maxval: incentiveRegulationValueDto.maxval,
			defaultval: incentiveRegulationValueDto.defaultval,
		};
		// Relations
		if(incentiveRegulationValueDto.stageId != null) {
			prismaRequestArgs['data']['stage'] = {
				connect: {
					id: incentiveRegulationValueDto.stageId
				}
			};
		}
		if(incentiveRegulationValueDto.roleId != null) {
			prismaRequestArgs['data']['role'] = {
				connect: {
					id: incentiveRegulationValueDto.roleId
				}
			};
		}
		return await this.prisma.incentiveRegulationValue.create(prismaRequestArgs);
	}

	async updateIncentiveRegulationValue(incentiveRegulationValueDto: IncentiveRegulationValueDto) {
		return await this.prisma.incentiveRegulationValue.update({
			where: {
				id: incentiveRegulationValueDto.id,
			},
			data: {
				stageId: incentiveRegulationValueDto.stageId,
				roleId: incentiveRegulationValueDto.roleId,
				minval: incentiveRegulationValueDto.minval,
				maxval: incentiveRegulationValueDto.maxval,
				defaultval: incentiveRegulationValueDto.defaultval,
			},
		});
	}

	// Get
	async getIncentiveRegulationValues(filters: any): Promise<IncentiveRegulationValueDto[]> {
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
				stage: true,
				role: true,
			};
		}
		// Order
		if(filters.orderBy !== undefined) {
			prismaRequestArgs['orderBy'] = QueryParamsTools.getPrismaOrderByArray(filters);
		}
		return await this.prisma.incentiveRegulationValue.findMany(prismaRequestArgs);
	}

	// Count
	async countIncentiveRegulationValues(filters: any): Promise<number> {
		let prismaRequestArgs: any = {};
		// Filter
		{
			prismaRequestArgs['where'] = QueryParamsTools.getPrismaWhereObject(filters);
		}
		return await this.prisma.incentiveRegulationValue.count(prismaRequestArgs);
	}

	async getIncentiveRegulationValue(id: number): Promise<IncentiveRegulationValueDto> {
		return await this.prisma.incentiveRegulationValue.findUnique({
			where: {
				id: id,
			},
			include: {
				stage: true,
				role: true,
			},
		})
	}

	async deleteIncentiveRegulationValue(id: number) {
		return await this.prisma.incentiveRegulationValue.delete({
			where: {
				id: id,
			}
		});
	}
}