import { Injectable } from "@nestjs/common";
import { IncentiveAssignationDto } from "../dto/incentive-assignation.dto";
import { PrismaService } from "../repository/prisma.service";
import { QueryParamsTools } from "../tools/query-params.class";

@Injectable({})
export class IncentiveAssignationEntityService {
	constructor(
		private prisma: PrismaService,
	) {}

	async insertIncentiveAssignation(incentiveAssignationDto: IncentiveAssignationDto) {
		let prismaRequestArgs: any = {};
		// Fileds
		prismaRequestArgs['data'] = {
			value: incentiveAssignationDto.value,
			preAmount: incentiveAssignationDto.preAmount,
			amount: incentiveAssignationDto.amount,
		};
		// Relations
		if(incentiveAssignationDto.assignationId != null) {
			prismaRequestArgs['data']['assignation'] = {
				connect: {
					id: incentiveAssignationDto.assignationId
				}
			};
		}
		if(incentiveAssignationDto.calculationValueId != null) {
			prismaRequestArgs['data']['calculationValue'] = {
				connect: {
					id: incentiveAssignationDto.calculationValueId
				}
			};
		}
		return await this.prisma.incentiveAssignation.create(prismaRequestArgs);
	}

	async updateIncentiveAssignation(incentiveAssignationDto: IncentiveAssignationDto) {
		return await this.prisma.incentiveAssignation.update({
			where: {
				id: incentiveAssignationDto.id,
			},
			data: {
				assignationId: incentiveAssignationDto.assignationId,
				calculationValueId: incentiveAssignationDto.calculationValueId,
				value: incentiveAssignationDto.value,
				preAmount: incentiveAssignationDto.preAmount,
				amount: incentiveAssignationDto.amount,
			},
		});
	}

	// Get
	async getIncentiveAssignations(filters: any): Promise<IncentiveAssignationDto[]> {
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
				assignation: true,
				calculationValue: true,
			};
		}
		// Order
		if(filters.orderBy !== undefined) {
			prismaRequestArgs['orderBy'] = QueryParamsTools.getPrismaOrderByArray(filters);
		}
		return await this.prisma.incentiveAssignation.findMany(prismaRequestArgs);
	}

	// Count
	async countIncentiveAssignations(filters: any): Promise<number> {
		let prismaRequestArgs: any = {};
		// Filter
		{
			prismaRequestArgs['where'] = QueryParamsTools.getPrismaWhereObject(filters);
		}
		return await this.prisma.incentiveAssignation.count(prismaRequestArgs);
	}

	async getIncentiveAssignation(id: number): Promise<IncentiveAssignationDto> {
		return await this.prisma.incentiveAssignation.findUnique({
			where: {
				id: id,
			},
			include: {
				assignation: true,
				calculationValue: true,
			},
		})
	}

	async deleteIncentiveAssignation(id: number) {
		return await this.prisma.incentiveAssignation.delete({
			where: {
				id: id,
			}
		});
	}
}