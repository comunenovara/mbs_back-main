import { Injectable } from "@nestjs/common";
import { IncentiveRoleAssignationDto } from "../dto/incentive-role-assignation.dto";
import { PrismaService } from "../repository/prisma.service";
import { QueryParamsTools } from "src/tools/query-params.class";

@Injectable({})
export class IncentiveRoleAssignationEntityService {
	constructor(
		private prisma: PrismaService,
	) {}

	async insertIncentiveRoleAssignation(incentiveRoleAssignationDto: IncentiveRoleAssignationDto) {
		let prismaRequestArgs: any = {};
		// Fileds
		prismaRequestArgs['data'] = {
		};
		// Relations
		if(incentiveRoleAssignationDto.beneficiaryId != null) {
			prismaRequestArgs['data']['beneficiary'] = {
				connect: {
					id: incentiveRoleAssignationDto.beneficiaryId
				}
			};
		}
		if(incentiveRoleAssignationDto.calculationId != null) {
			prismaRequestArgs['data']['calculation'] = {
				connect: {
					id: incentiveRoleAssignationDto.calculationId
				}
			};
		}
		if(incentiveRoleAssignationDto.roleId != null) {
			prismaRequestArgs['data']['role'] = {
				connect: {
					id: incentiveRoleAssignationDto.roleId
				}
			};
		}
		return await this.prisma.incentiveRoleAssignation.create(prismaRequestArgs);
	}

	async updateIncentiveRoleAssignation(incentiveRoleAssignationDto: IncentiveRoleAssignationDto) {
		return await this.prisma.incentiveRoleAssignation.update({
			where: {
				id: incentiveRoleAssignationDto.id,
			},
			data: {
				beneficiaryId: incentiveRoleAssignationDto.beneficiaryId,
				calculationId: incentiveRoleAssignationDto.calculationId,
				roleId: incentiveRoleAssignationDto.roleId,
			},
		});
	}

	// Get
	async getIncentiveRoleAssignations(filters: any): Promise<IncentiveRoleAssignationDto[]> {
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
				beneficiary: true,
				calculation: true,
				role: true,
			};
		}
		// Order
		if(filters.orderBy !== undefined) {
			prismaRequestArgs['orderBy'] = QueryParamsTools.getPrismaOrderByArray(filters);
		}
		return await this.prisma.incentiveRoleAssignation.findMany(prismaRequestArgs);
	}

	// Count
	async countIncentiveRoleAssignations(filters: any): Promise<number> {
		let prismaRequestArgs: any = {};
		// Filter
		{
			prismaRequestArgs['where'] = QueryParamsTools.getPrismaWhereObject(filters);
		}
		return await this.prisma.incentiveRoleAssignation.count(prismaRequestArgs);
	}

	async getIncentiveRoleAssignation(id: number): Promise<IncentiveRoleAssignationDto> {
		return await this.prisma.incentiveRoleAssignation.findUnique({
			where: {
				id: id,
			},
			include: {
				beneficiary: true,
				calculation: true,
				role: true,
			},
		})
	}

	async deleteIncentiveRoleAssignation(id: number) {
		return await this.prisma.incentiveRoleAssignation.delete({
			where: {
				id: id,
			}
		});
	}
}