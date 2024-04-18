import { Injectable } from "@nestjs/common";
import { IncentiveRoleDto } from "../dto/incentive-role.dto";
import { PrismaService } from "../repository/prisma.service";
import { QueryParamsTools } from "../tools/query-params.class";

@Injectable({})
export class IncentiveRoleEntityService {
	constructor(
		private prisma: PrismaService,
	) {}

	async insertIncentiveRole(incentiveRoleDto: IncentiveRoleDto) {
		let prismaRequestArgs: any = {};
		// Fileds
		prismaRequestArgs['data'] = {
			description: incentiveRoleDto.description,
		};
		// Relations
		if(incentiveRoleDto.procurementTypeId != null) {
			prismaRequestArgs['data']['procurementType'] = {
				connect: {
					id: incentiveRoleDto.procurementTypeId
				}
			};
		}
		if(incentiveRoleDto.regulationId != null) {
			prismaRequestArgs['data']['regulation'] = {
				connect: {
					id: incentiveRoleDto.regulationId
				}
			};
		}
		return await this.prisma.incentiveRole.create(prismaRequestArgs);
	}

	async updateIncentiveRole(incentiveRoleDto: IncentiveRoleDto) {
		return await this.prisma.incentiveRole.update({
			where: {
				id: incentiveRoleDto.id,
			},
			data: {
				procurementTypeId: incentiveRoleDto.procurementTypeId,
				regulationId: incentiveRoleDto.regulationId,
				description: incentiveRoleDto.description,
			},
		});
	}

	// Get
	async getIncentiveRoles(filters: any): Promise<IncentiveRoleDto[]> {
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
		return await this.prisma.incentiveRole.findMany(prismaRequestArgs);
	}

	// Count
	async countIncentiveRoles(filters: any): Promise<number> {
		let prismaRequestArgs: any = {};
		// Filter
		{
			prismaRequestArgs['where'] = QueryParamsTools.getPrismaWhereObject(filters);
		}
		return await this.prisma.incentiveRole.count(prismaRequestArgs);
	}

	async getIncentiveRole(id: number): Promise<IncentiveRoleDto> {
		return await this.prisma.incentiveRole.findUnique({
			where: {
				id: id,
			},
			include: {
				procurementType: true,
				regulation: true,
			},
		})
	}

	async deleteIncentiveRole(id: number) {
		return await this.prisma.incentiveRole.delete({
			where: {
				id: id,
			}
		});
	}
}